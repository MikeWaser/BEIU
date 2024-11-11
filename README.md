# BEIU - CLI för Eventhantering

Ett CLI-verktyg för att hantera events via en backend byggd med Node.js och MongoDB. Du kan lista event, visa detaljer för event samt registrera och avregistrera användare.

## Krav

* Node.js

 ## Installation

För att komma igång.



1. **Klona gruppuppgift repositoriet**  
   ```bash
   git clone https://github.com/samadamp/GruppUppgift.git
   ```
2. **Installera beroenden**  
   Gå till projektmappen och kör:
   ```bash
   npm install
   ```
3. **Connect to Database**
   ```
   mongodb+srv://94sampan:Bf49PuSE9uZ6sJxK@databas.qtcdf.mongodb.net/
   ```
5. **Navigera till backend-servermappen**
   ```bash
   cd backend/server
   ```
6. **Starta backend-servern**
   ```bash
   npm run dev
   ```
7. **Klona individuella repositoriet**
   ```bash
   git clone https://github.com/MikeWaser/BEIU.git
   ```
8. **Navigera till climappen**
   ```bash
   cd cli
   ```
9. **Installera beroenden**  
  Kör:
   ```bash
   npm install
   ```
### Klart
Nu kan du köra olika node kommandon
**Lista alla publika event**
```bash
node cli.js list
```
**Visa information om specifika event**
```bash
node cli.js show <eventId>
```
**Registrera användare till event**
```bash
node cli.js register <eventId> <userId>
```
**Avregistrera användare till event**
```bash
node cli.js unregister <eventId> <userId>
```

***AnvändarId för att testa***
```
maiqen
```
***EventId för att testa***
```
6728e384983a394e886d0efe
```
