# Cara Push ke GitHub

## 1. Konfigurasi Git (jika belum)
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"
```

## 2. Commit perubahan
```bash
git add .
git commit -m "Initial commit: Hono API with Prisma and SQLite"
```

## 3. Buat repository di GitHub
- Buka https://github.com
- Klik "New repository"
- Beri nama repository (contoh: `hono-api`)
- Jangan centang "Initialize with README" (karena sudah ada file)
- Klik "Create repository"

## 4. Tambahkan remote dan push
```bash
# Ganti YOUR_USERNAME dengan username GitHub Anda
git remote add origin https://github.com/YOUR_USERNAME/hono-api.git
git branch -M main
git push -u origin main
```

## Atau jika sudah ada repository:
```bash
# Cek remote yang sudah ada
git remote -v

# Jika belum ada, tambahkan:
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push ke GitHub
git push -u origin main
```

## Catatan:
- File `prisma/dev.db` sebaiknya ditambahkan ke `.gitignore` karena ini file database lokal
- Jangan commit file `.env` yang berisi secret keys

