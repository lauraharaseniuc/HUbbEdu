import type { VercelRequest, VercelResponse } from '@vercel/node';

const buildPromptInformatica = (activityText: string) => `Ești profesor de informatică la liceu în România (clasa a IX-a sau a X-a).
Generează o fișă de lucru completă și detaliată bazată pe această activitate de învățare:

"${activityText}"

Structurează fișa astfel:

# [Titlu scurt al fișei]

## Noțiuni teoretice
(Explicații clare cu exemple de cod funcționale în Python sau C++ după context. Explică fiecare concept pas cu pas.)

## Exerciții rezolvate

### Exercițiul 1 — [titlu]
**Enunț:** ...
**Rezolvare:**
\`\`\`python
# cod complet cu comentarii explicative
\`\`\`
**Explicație:** (de ce funcționează astfel)

### Exercițiul 2 — [titlu]
(la fel ca mai sus)

## Exerciții propuse
1. **[Titlu]** — [enunț] _(Dificultate: ușor)_
2. **[Titlu]** — [enunț] _(Dificultate: mediu)_
3. **[Titlu]** — [enunț] _(Dificultate: mediu)_
4. **[Titlu]** — [enunț] _(Dificultate: dificil)_

## Exercițiu bonus
(Un exercițiu mai complex pentru elevii avansați, cu enunț complet)

Folosește un ton didactic și prietenos. Include cod complet care poate fi rulat direct.`;

const buildPromptTic = (activityText: string) => `Ești profesor de TIC (Tehnologia Informației și Comunicațiilor) la liceu în România (clasa a IX-a).
TIC nu este o materie de programare — nu include cod sursă, algoritmi sau exerciții de programare.
Generează o fișă de lucru completă și detaliată bazată pe această activitate de învățare:

"${activityText}"

Fișa trebuie să conțină activități practice realizabile la clasă sau acasă: tehnoredactare, lucru cu aplicații Office/Google Workspace, navigare web, colaborare digitală, analiză critică, crearea de documente/prezentări/formulare etc.

Structurează fișa astfel:

# [Titlu scurt al fișei]

## Context și obiective
(Explică pe scurt ce vor exersa elevii și de ce este util în viața reală.)

## Sarcini de lucru

### Sarcina 1 — [titlu]
**Ce ai de făcut:** (descriere clară, pas cu pas)
**Rezultat așteptat:** (ce trebuie să livreze elevul)

### Sarcina 2 — [titlu]
(la fel ca mai sus)

### Sarcina 3 — [titlu]
(la fel ca mai sus)

## Reflecție
(1–2 întrebări de gândire critică legate de activitate, fără răspuns dat)

## Provocare suplimentară
(O sarcină opțională mai complexă pentru elevii care termină repede)

Folosește un ton didactic și prietenos. Nu include niciun cod sursă sau pseudocod.`;

const buildPrompt = (activityText: string, subject: string) =>
  subject === 'tic' ? buildPromptTic(activityText) : buildPromptInformatica(activityText);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { activityText, subject } = req.body as { activityText?: string; subject?: string };
  if (!activityText?.trim()) {
    return res.status(400).json({ error: 'activityText is required' });
  }

  const apiKey = process.env['GROQ_API_KEY'];
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: buildPrompt(activityText, subject ?? 'informatica') }],
        max_tokens: 4096,
        temperature: 0.7,
      }),
    });

    const data = await response.json() as {
      choices?: Array<{ message?: { content?: string } }>;
      error?: { message: string };
    };

    if (!response.ok || data.error) {
      console.error('Groq error:', data.error);
      return res.status(502).json({ error: data.error?.message ?? 'Groq error' });
    }

    const content = data.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ content });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
