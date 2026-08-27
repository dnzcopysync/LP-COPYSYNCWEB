# Copy Sync — Landing Page

Landing page responsiva da Copy Sync, preparada para GitHub e Vercel.

## Publicar pela Vercel

1. Crie um repositório vazio no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. Na Vercel, clique em **Add New → Project** e importe o repositório.
4. A Vercel reconhecerá o projeto como Vite. Clique em **Deploy** sem alterar as configurações.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar a versão final

```bash
npm run build
```

Os arquivos finais serão criados na pasta `dist`.

## Domínio próprio

Depois do deploy, configure o domínio em **Project Settings → Domains** na Vercel. O endereço usado nas tags de compartilhamento é atualizado automaticamente durante o build.
