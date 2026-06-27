import tkinter as tk
from tkinter import messagebox
import random

# ==============================================================================
# STRUCTURI DE DATE PRINCIPALE (Liste și Dicționare)
# ==============================================================================

# 1. LISTĂ: Reține obiectele pe care jucătorul le are în rucsac în acest moment.
# Listele sunt ordonate și pot fi modificate ușor (adunăm/ștergem obiecte).
inventar = ["Măr Dulce", "Scut de Lemn"]

# 2. DICȚIONAR: Baza de date cu proprietățile fiecarei obiect din joc.
# Folosește perechi Cheie-Valoare. Cheia este numele obiectului, iar valoarea este
# un alt dicționar cu detalii (tipul obiectului, efectul său și descrierea sa).
baza_date_obiecte = {
    "Măr Dulce": {"tip": "viata", "valoare": 25, "descriere": "Îți redă 25 puncte de viață."},
    "Elixir Magic": {"tip": "viata", "valoare": 50, "descriere": "Îți redă 50 puncte de viață."},
    "Sabie de Oțel": {"tip": "atac", "valoare": 15, "descriere": "Crește atacul tău cu 15 puncte."},
    "Scut de Lemn": {"tip": "aparare", "valoare": 10, "descriere": "Te protejează la următorul atac."}
}

# 3. DICȚIONAR: Reține starea curentă a jucătorului (statistici dinamice).
jucator = {"viata": 100, "atac": 10, "scut_activ": False, "scor": 0}

# ==============================================================================
# SUBPROGRAME (Funcții scurte pentru logica jocului)
# ==============================================================================

def actualizeaza_interfata():
    lbl_viata.config(text=f"Sănătate: {jucator['viata']}/100 💖")
    lbl_atac.config(text=f"Putere Atac: {jucator['atac']} ⚔️")
    lbl_scor.config(text=f"Scor / Monștri învinși: {jucator['scor']} 🏆")
    if jucator["scut_activ"]:
        lbl_scut.config(text="Scut Activ: DA 🛡️", fg="green")
    else:
        lbl_scut.config(text="Scut Activ: NU ❌", fg="red")
    lst_inventar.delete(0, tk.END)
    for obiect in inventar:
        lst_inventar.insert(tk.END, obiect)

def adauga_in_inventar(obiect_nou):
    if len(inventar) < 5:
        inventar.append(obiect_nou)
        scrie_in_jurnal(f"🎒 Ai pus în rucsac: {obiect_nou}.")
    else:
        scrie_in_jurnal("⚠️ Rucsacul este plin! Trebuie să folosești sau să arunci ceva.")
    actualizeaza_interfata()

def foloseste_obiect_selectat():
    selectie = lst_inventar.curselection()
    if not selectie:
        scrie_in_jurnal("❌ Te rog să selectezi un obiect din rucsac mai întâi!")
        return
    index = selectie[0]
    nume_obiect = inventar[index]
    detalii = baza_date_obiecte[nume_obiect]
    if detalii["tip"] == "viata":
        jucator["viata"] = min(100, jucator["viata"] + detalii["valoare"])
        scrie_in_jurnal(f"🧪 Ai consumat {nume_obiect}. {detalii['descriere']}")
    elif detalii["tip"] == "atac":
        jucator["atac"] += detalii["valoare"]
        scrie_in_jurnal(f"🗡️ Ai echipat {nume_obiect}. Atacul tău a crescut!")
    elif detalii["tip"] == "aparare":
        jucator["scut_activ"] = True
        scrie_in_jurnal(f"🛡️ Ai ridicat {nume_obiect}. Ești protejat!")
    inventar.pop(index)
    actualizeaza_interfata()

def arunca_obiect_selectat():
    selectie = lst_inventar.curselection()
    if selectie:
        index = selectie[0]
        nume_obiect = inventar[index]
        inventar.pop(index)
        scrie_in_jurnal(f"🗑️ Ai aruncat pe jos: {nume_obiect}.")
        actualizeaza_interfata()

def exploreaza():
    eveniment = random.choice(["obiect", "monstru", "nimic"])
    if eveniment == "nimic":
        scrie_in_jurnal("🍃 Explorezi poteca... dar totul este liniștit în jur.")
    elif eveniment == "obiect":
        obiect_gasit = random.choice(list(baza_date_obiecte.keys()))
        scrie_in_jurnal(f"✨ Ai găsit pe jos: {obiect_gasit}!")
        adauga_in_inventar(obiect_gasit)
    elif eveniment == "monstru":
        viata_monstru = random.randint(15, 35)
        scrie_in_jurnal(f"👹 Un Goblin fioros cu {viata_monstru} HP îți taie calea!")
        scrie_in_jurnal(f"⚔️ Îl lovești cu puterea ta de {jucator['atac']}!")
        viata_monstru -= jucator["atac"]
        if viata_monstru <= 0:
            scrie_in_jurnal("🏆 Ai învins goblinul înainte ca el să riposteze!")
            jucator["scor"] += 1
        else:
            scrie_in_jurnal("💥 Goblinul ripostează și te atacă!")
            if jucator["scut_activ"]:
                scrie_in_jurnal("🛡️ Scutul tău a absorbit toată lovitura! Scutul s-a spart.")
                jucator["scut_activ"] = False
            else:
                jucator["viata"] -= 20
                scrie_in_jurnal("💔 Ai pierdut 20 puncte de viață!")
        actualizeaza_interfata()
        verifica_stare_joc()

def verifica_stare_joc():
    if jucator["viata"] <= 0:
        messagebox.showinfo("Sfârșitul Jocului", f"Ai fost învins! Scor final: {jucator['scor']} monștri.")
        jucator["viata"] = 100
        jucator["atac"] = 10
        jucator["scut_activ"] = False
        jucator["scor"] = 0
        global inventar
        inventar = ["Măr Dulce"]
        txt_jurnal.delete('1.0', tk.END)
        scrie_in_jurnal("🔄 Un nou erou pornește la drum!")
        actualizeaza_interfata()

def scrie_in_jurnal(text):
    txt_jurnal.insert(tk.END, text + "\n")
    txt_jurnal.see(tk.END)

# ==============================================================================
# CREAREA INTERFEȚEI GRAFICE (Tkinter)
# ==============================================================================

fereastra = tk.Tk()
fereastra.title("Aventurierul și Inventarul Magic 🛡️")
fereastra.geometry("500x550")
fereastra.configure(bg="#2c3e50")

frame_stats = tk.LabelFrame(fereastra, text=" Statistici Erou ", bg="#34495e", fg="white", font=("Arial", 11, "bold"))
frame_stats.pack(pady=10, fill="x", padx=10)

lbl_viata = tk.Label(frame_stats, text="", bg="#34495e", fg="#e74c3c", font=("Arial", 10, "bold"))
lbl_viata.grid(row=0, column=0, padx=10, pady=5)
lbl_atac = tk.Label(frame_stats, text="", bg="#34495e", fg="#f1c40f", font=("Arial", 10, "bold"))
lbl_atac.grid(row=0, column=1, padx=10, pady=5)
lbl_scut = tk.Label(frame_stats, text="", bg="#34495e", font=("Arial", 10, "bold"))
lbl_scut.grid(row=0, column=2, padx=10, pady=5)
lbl_scor = tk.Label(frame_stats, text="", bg="#34495e", fg="#3498db", font=("Arial", 10, "bold"))
lbl_scor.grid(row=1, column=0, columnspan=3, pady=5)

frame_inventar = tk.LabelFrame(fereastra, text=" Rucsacul Tău (Max 5 Obiecte) ", bg="#34495e", fg="white", font=("Arial", 11, "bold"))
frame_inventar.pack(pady=5, fill="both", expand=True, padx=10)
lst_inventar = tk.Listbox(frame_inventar, height=5, font=("Arial", 10), bg="#ecf0f1")
lst_inventar.pack(side="left", fill="both", expand=True, padx=10, pady=10)
frame_butoane_inv = tk.Frame(frame_inventar, bg="#34495e")
frame_butoane_inv.pack(side="right", padx=10)
btn_foloseste = tk.Button(frame_butoane_inv, text="Folosește", command=foloseste_obiect_selectat, bg="#2ecc71", fg="white", width=12, font=("Arial", 9, "bold"))
btn_foloseste.pack(pady=5)
btn_arunca = tk.Button(frame_butoane_inv, text="Aruncă", command=arunca_obiect_selectat, bg="#e74c3c", fg="white", width=12, font=("Arial", 9, "bold"))
btn_arunca.pack(pady=5)

btn_exploreaza = tk.Button(fereastra, text="🌲 EXPLOREAZĂ PĂDUREA MAGICĂ 🌲", command=exploreaza, bg="#9b59b6", fg="white", font=("Arial", 11, "bold"), pady=8)
btn_exploreaza.pack(pady=10, padx=10, fill="x")

lbl_jurnal = tk.Label(fereastra, text="Jurnal de Aventură:", bg="#2c3e50", fg="white", font=("Arial", 9, "bold"))
lbl_jurnal.pack(anchor="w", padx=10)
txt_jurnal = tk.Text(fereastra, height=8, bg="#1a252f", fg="#2ecc71", font=("Courier", 9))
txt_jurnal.pack(fill="x", padx=10, pady=5)

scrie_in_jurnal("🚀 Călătoria a început! Apasă pe 'Explorează' pentru a căuta comori și monștri.")
actualizeaza_interfata()
fereastra.mainloop()
