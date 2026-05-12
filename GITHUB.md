# Lier ce dossier à GitHub — `melammari-dev/ai-cv`

Dépôt distant : [https://github.com/melammari-dev/ai-cv.git](https://github.com/melammari-dev/ai-cv.git)  
Branche par défaut sur GitHub : **main** (dépôt actuellement vide, premier push sans conflit).

## Dans un terminal (PowerShell), à la racine du site

Remplacez le chemin si votre copie du projet est ailleurs.

```powershell
cd "C:\Users\frue12406\Documents\workspace\ai\mouhssine-el-ammari-site"
```

### 1. Initialiser Git (si ce n’est pas déjà fait)

```powershell
git init
git branch -M main
```

### 2. Ajouter le dépôt GitHub comme `origin`

```powershell
git remote add origin https://github.com/melammari-dev/ai-cv.git
```

Si `origin` existe déjà avec une autre URL :

```powershell
git remote set-url origin https://github.com/melammari-dev/ai-cv.git
git remote -v
```

### 3. Premier commit et envoi

```powershell
git add .
git status
git commit -m "Site portfolio statique (CV, i18n, données JSON)"
git push -u origin main
```

`git push` vous demandera de vous authentifier (GitHub CLI `gh auth login`, ou un **Personal Access Token** en mot de passe HTTPS, ou une clé **SSH** si vous utilisez `git@github.com:melammari-dev/ai-cv.git`).

## SSH (optionnel)

```powershell
git remote set-url origin git@github.com:melammari-dev/ai-cv.git
git push -u origin main
```

## Après coup

- Ouvrir [https://github.com/melammari-dev/ai-cv](https://github.com/melammari-dev/ai-cv) pour vérifier les fichiers.
- Activer **GitHub Pages** (Settings → Pages → dossier racine ou `main`) si vous voulez héberger le site gratuitement.
