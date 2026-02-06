# Guia de Geração do APK - Quiz de Contabilidade

Seu aplicativo está **100% pronto**! Siga os passos abaixo para gerar o arquivo `.apk` para instalação no Android.

## Opção 1: Gerar APK via Expo Go (Mais Rápido - Recomendado)

Esta é a forma mais rápida de testar o app no seu celular Android:

### Passo 1: Instalar Expo Go
1. Abra a Google Play Store no seu celular Android
2. Procure por **"Expo Go"** e instale

### Passo 2: Executar o Projeto
1. No seu computador, abra o terminal na pasta do projeto
2. Execute: `npm start` ou `pnpm dev`
3. Você verá um **QR Code** no terminal

### Passo 3: Abrir no Celular
1. Abra o **Expo Go** no seu celular
2. Toque em **"Scan QR Code"**
3. Aponte para o QR Code exibido no terminal
4. O app será carregado automaticamente!

---

## Opção 2: Gerar APK Standalone (Instalação Permanente)

Para criar um arquivo `.apk` que pode ser instalado diretamente:

### Pré-requisitos
- Node.js 18+ instalado
- Conta Expo (gratuita) em https://expo.dev
- 10-15 minutos de tempo de compilação

### Passo 1: Fazer Login no Expo
```bash
npm install -g eas-cli
eas login
```

### Passo 2: Configurar o Projeto
```bash
eas build:configure
```

### Passo 3: Gerar o APK
```bash
eas build --platform android --local
```

Ou para compilação na nuvem (recomendado):
```bash
eas build --platform android
```

### Passo 4: Baixar o APK
- Após a compilação, você receberá um link para baixar o `.apk`
- Transfira o arquivo para seu celular Android
- Toque no arquivo para instalar

---

## Opção 3: Compilação Local com Android Studio (Avançado)

Se você tem Android Studio instalado:

```bash
npx expo prebuild --clean
cd android
./gradlew assembleRelease
```

O APK estará em: `android/app/build/outputs/apk/release/app-release.apk`

---

## Instalação Manual do APK no Celular

1. **Transferir o arquivo**:
   - Via USB, email, Google Drive, etc.

2. **Habilitar instalação de fontes desconhecidas**:
   - Configurações → Segurança → Permitir instalação de apps desconhecidos

3. **Instalar**:
   - Toque no arquivo `.apk`
   - Confirme a instalação

---

## Funcionalidades do App

✅ **Módulos de Estudo**: 4 aulas com 30+ questões  
✅ **Tipos de Questões**: Verdadeiro/Falso e Múltipla Escolha  
✅ **Explicações Detalhadas**: Cada questão tem explicação completa  
✅ **Rastreamento de Progresso**: Veja sua pontuação em tempo real  
✅ **Interface Intuitiva**: Design moderno e responsivo  

---

## Troubleshooting

### "QR Code não funciona"
- Certifique-se de que seu celular está na mesma rede Wi-Fi do computador
- Tente fechar e reabrir o Expo Go

### "Erro ao compilar"
- Execute: `npm install` ou `pnpm install`
- Delete `node_modules` e reinstale: `rm -rf node_modules && npm install`

### "App não abre"
- Verifique se tem espaço livre no celular (mínimo 100MB)
- Tente desinstalar e reinstalar

---

## Suporte

Para mais informações:
- Documentação Expo: https://docs.expo.dev
- Guia de Build: https://docs.expo.dev/build/setup/
- Comunidade: https://forums.expo.dev

---

**Aproveite seu app de quiz de contabilidade! 📚**
