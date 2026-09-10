const betaUrl='https://github.com/beyond-commander/beyondcmd/wiki/Beta-Testers';
const supportEmailCodes=[98,101,121,111,110,100,99,109,100,50,48,48,54,64,103,109,97,105,108,46,99,111,109];
function supportEmail(){return String.fromCharCode(...supportEmailCodes)}
const I={
en:{home:'Home',features:'Features',pro:'Pro',plugins:'Plugins',license:'License',support:'Contact',about:'About',tagline:'Beyond file management',lang:'English',eyebrow:'Next-generation, multi-platform file manager',hero2:'Much more than a Total Commander alternative!',heroCopy:'A modern, fast and productive dual-pane file manager with advanced operations, extensibility, WCL modules, automation and a platform-first architecture. Linux, Windows, macOS and Android builds are available; macOS releases are published separately.',beta:'Beta tester: Sign up',order:'License: Order',free:'Free download!',freeSub:'Available builds can be downloaded free of charge.',priceFrom:'License: 25 EUR + VAT',priceSub:'One user license, simple pricing.',platforms:'Platforms',platformsFancy:'Choose a platform to download',windows:'Windows',macos:'macOS',linuxShort:'Linux',android:'Android',active:'Active',coming:'Coming!',heroStatus:'Arrived! Sign up as a beta tester!',linux:'Linux — active',pluginWidgetTitle:'Plugins & WCL modules',pluginWidgetCopy:'Extend Beyond Commander with additional community plugin functionality.',pluginWidgetButton:'Download plugins',featuresTitle:'Features',featuresLead:'The familiar Commander workflow, extended with modern tools and native multi-platform editions.',basics:'Core functions',extras:'Highlighted extras',pluginsTitle:'Plugins',pluginsLead:'Compatibility refers to the plugin binary/API itself, not to whether a Beyond Commander build for that platform has already been released.',family:'Plugin family',purpose:'Purpose',source:'Catalogue / source',wcx:'Packer / archive plugins',wfx:'File-system plugins',wlx:'Lister / viewer plugins',wdx:'Content / metadata plugins',native:'Native ABI',bridge:'PE/Wine bridge needed',port:'Port/build dependent',pluginsNote:'Native plugins compiled for the host platform can be loaded directly. Windows PE Total Commander plugins on Linux require the PE/Wine bridge and must not be presented as native Linux plugins.',installers:'Linux packages',installersD:'AppImage, DEB and RPM packages are available from the Beyond Commander releases page.',licenseTitle:'License & pricing',licenseLead:'One simple user-based price, following the practical licensing principles used by Total Commander.',uniform:'Uniform price',vat:' + VAT / user',trial:'30-day trial',trialD:'Use the complete trial for 30 days. After the trial, purchase a license or remove the software.',userLic:'One license belongs to one user',userLicD:'The license is assigned to a person rather than one computer.',multiPC:'Multiple computers for the same user',multiPCD:'The licensed user may use Beyond Commander on multiple personal/work computers.',concurrent:'Business licensing by concurrent users',concurrentD:'Organizations need approximately as many user licenses as the maximum number of people using the software at the same time.',updates:'Updates included',updatesD:'Registered users receive product updates under the published license terms.',buy:'Order license',tcRef:'Licensing model reference: Total Commander ordering/FAQ',supportTitle:'Support',supportLead:'Licensed users can request product support and receive updates, fixes and documentation.',s1:'Product support',s1d:'Help with installation, configuration and normal product use.',s2:'Updates & bug fixes',s2d:'Ongoing versions with stability, compatibility and security fixes.',s3:'Documentation & FAQ',s3d:'Guides, troubleshooting information and practical usage notes.',s4:'Issue reporting',s4d:'Report reproducible bugs and contribute feedback.',emailSupport:'Contact support by email',betaJoin:'Join the beta program',betaJoinD:'Help test Beyond Commander before public releases.'},
hu:{home:'Főoldal',features:'Funkciók',pro:'Pro',plugins:'Bővítmények',license:'Licenc',support:'Kapcsolat',about:'Névjegy',tagline:'A fájlmenedzseren túl',lang:'Magyar',eyebrow:'Új generációs, többplatformos fájlkezelő',hero2:'Sokkal több, mint egy Total Commander alternatíva!',heroCopy:'Modern, gyors és hatékony kétpaneles fájlkezelő fejlett műveletekkel, bővíthetőséggel, WCL modulokkal, automatizálással és többplatformos architektúrával. Linux, Windows, macOS és Android változat is elérhető; a macOS kiadások külön release oldalon jelennek meg.',beta:'Beta teszter: Feliratkozás',order:'Licenc: Megrendelés',free:'Ingyenes letöltés!',freeSub:'A jelenleg elérhető kiadások ingyenesen letölthetők.',priceFrom:'Licenc: 25 EUR + ÁFA',priceSub:'Egy felhasználói licenc, egyszerű árazás.',platforms:'Platformok',platformsFancy:'Válassz platformot a letöltéshez',windows:'Windows',macos:'macOS',linuxShort:'Linux',android:'Android',active:'Aktív',coming:'Jön!',heroStatus:'Megérkezett! Jelentkezz beta teszternek!',linux:'Linux — aktív',pluginWidgetTitle:'Pluginok és WCL modulok',pluginWidgetCopy:'Bővítse Beyond Commanderét további funkciókkal a közösségi pluginok segítségével!',pluginWidgetButton:'Pluginok letöltése',featuresTitle:'Funkciók',featuresLead:'Ismerős Commander munkafolyamat modern eszközökkel és natív többplatformos kiadásokkal.',basics:'Alapvető funkciók',extras:'Kiemelt extrák',pluginsTitle:'Bővítmények',pluginsLead:'A kompatibilitás a plugin binárisára/API-jára vonatkozik, nem arra, hogy az adott platformra megjelent-e már a Beyond Commander.',family:'Bővítménycsalád',purpose:'Feladat',source:'Katalógus / forrás',wcx:'Tömörítő / archívum pluginok',wfx:'Fájlrendszer pluginok',wlx:'Lister / néző pluginok',wdx:'Tartalom / metaadat pluginok',native:'Natív ABI',bridge:'PE/Wine bridge szükséges',port:'Port/build függő',pluginsNote:'A fogadó platformra natívan fordított plugin közvetlenül betölthető. A Windows PE Total Commander plugin Linuxon PE/Wine bridge-et igényel, ezért nem natív Linux pluginként kezelendő.',installers:'Linux csomagok',installersD:'Az AppImage, DEB és RPM csomagok elérhetők a Beyond Commander kiadások oldalán.',licenseTitle:'Licenc és árak',licenseLead:'Egyetlen egyszerű, felhasználóalapú ár, a Total Commander jól érthető licencelési elveinek mintájára.',uniform:'Egységes ár',vat:' + ÁFA / felhasználó',trial:'30 napos kipróbálás',trialD:'A teljes próbaváltozat 30 napig használható. Ezután licencet kell vásárolni vagy a szoftvert el kell távolítani.',userLic:'Egy licenc egy felhasználóhoz tartozik',userLicD:'A licenc személyhez kötődik, nem egyetlen számítógéphez.',multiPC:'Több saját számítógépen használható',multiPCD:'A licencelt felhasználó több saját vagy munkahelyi gépén használhatja.',concurrent:'Céges licenc az egyidejű felhasználók alapján',concurrentD:'A szükséges licencek száma az egyidejűleg használó személyek várható maximumához igazodik.',updates:'Frissítések járnak',updatesD:'A regisztrált felhasználók a közzétett feltételek szerint termékfrissítéseket kapnak.',buy:'Licenc megrendelése',tcRef:'Licencmodell referencia: Total Commander rendelés/FAQ',supportTitle:'Támogatás',supportLead:'A licencelt felhasználók terméktámogatást kérhetnek, valamint frissítéseket, hibajavításokat és dokumentációt kapnak.',s1:'Terméktámogatás',s1d:'Segítség telepítéshez, konfigurációhoz és a program használatához.',s2:'Frissítések és hibajavítások',s2d:'Új verziók stabilitási, kompatibilitási és biztonsági javításokkal.',s3:'Dokumentáció és GYIK',s3d:'Útmutatók, hibaelhárítás és gyakorlati tippek.',s4:'Hibajelentés',s4d:'Reprodukálható hibák és fejlesztési visszajelzések beküldése.',emailSupport:'Kapcsolatfelvétel e-mailben',betaJoin:'Csatlakozás a beta programhoz',betaJoinD:'Segíts a Beyond Commander tesztelésében a publikus kiadás előtt.'},
de:{home:'Start',features:'Funktionen',pro:'Pro',plugins:'Plugins',license:'Lizenz',support:'Kontakt',about:'Über Uns',tagline:'Mehr als Dateiverwaltung',lang:'Deutsch',eyebrow:'Dateimanager der nächsten Generation für mehrere Plattformen',hero2:'Viel mehr als nur eine Total-Commander-Alternative!',heroCopy:'Moderner, schneller Dual-Pane-Dateimanager mit erweiterten Operationen und einer plattformorientierten Architektur. Linux-, Windows-, macOS- und Android-Builds sind verfügbar; macOS-Releases werden separat veröffentlicht.',beta:'Beta-Tester: Anmelden',order:'Lizenz: Bestellen',free:'Kostenloser Download!',freeSub:'Verfügbare Builds können kostenlos heruntergeladen werden.',priceFrom:'Lizenz: 25 EUR + MwSt.',priceSub:'Eine Benutzerlizenz, einfache Preisgestaltung.',platforms:'Plattformen',platformsFancy:'Plattform zum Download auswählen',windows:'Windows',macos:'macOS',linuxShort:'Linux',android:'Android',active:'Aktiv',coming:'Kommt!',heroStatus:'Angekommen! Als Beta-Tester anmelden!',linux:'Linux — aktiv',featuresTitle:'Funktionen',featuresLead:'Vertrauter Commander-Workflow mit modernen Werkzeugen und nativen Multi-Plattform-Ausgaben.',basics:'Grundfunktionen',extras:'Besondere Extras',pluginsTitle:'Plugins',pluginsLead:'Kompatibilität beschreibt das Plugin-Binärformat/API, unabhängig von der aktuellen BC-Verfügbarkeit.',family:'Plugin-Familie',purpose:'Zweck',source:'Katalog / Quelle',wcx:'Packer-/Archiv-Plugins',wfx:'Dateisystem-Plugins',wlx:'Lister-/Viewer-Plugins',wdx:'Inhalts-/Metadaten-Plugins',native:'Native ABI',bridge:'PE/Wine-Bridge nötig',port:'Port/Build-abhängig',pluginsNote:'Native Plugins können direkt geladen werden. Windows-PE-Plugins benötigen unter Linux eine PE/Wine-Bridge.',installers:'Linux-Pakete',installersD:'AppImage-, DEB- und RPM-Pakete sind auf der Beyond-Commander-Releases-Seite verfügbar.',licenseTitle:'Lizenz & Preise',licenseLead:'Ein einfacher benutzerbasierter Preis nach dem verständlichen Lizenzprinzip von Total Commander.',uniform:'Einheitlicher Preis',vat:' + MwSt. / Benutzer',trial:'30-Tage-Test',trialD:'30 Tage testen, danach Lizenz kaufen oder Software entfernen.',userLic:'Eine Lizenz pro Benutzer',userLicD:'Die Lizenz gehört einer Person, nicht einem einzelnen PC.',multiPC:'Mehrere Computer desselben Benutzers',multiPCD:'Nutzung auf mehreren eigenen Arbeits-/Privatrechnern.',concurrent:'Firmenlizenz nach gleichzeitigen Benutzern',concurrentD:'Die Anzahl richtet sich nach der maximalen gleichzeitigen Nutzung.',updates:'Updates inklusive',updatesD:'Registrierte Benutzer erhalten Updates gemäß den veröffentlichten Bedingungen.',buy:'Lizenz bestellen',tcRef:'Lizenzmodell-Referenz: Total Commander Bestellung/FAQ',supportTitle:'Support',supportLead:'Lizenzierte Benutzer erhalten Produktsupport, Updates, Fehlerbehebungen und Dokumentation.',s1:'Produktsupport',s1d:'Hilfe bei Installation, Konfiguration und Nutzung.',s2:'Updates & Fehlerbehebungen',s2d:'Regelmäßige Versionen mit Stabilitäts- und Sicherheitskorrekturen.',s3:'Dokumentation & FAQ',s3d:'Anleitungen und Fehlerbehebung.',s4:'Fehler melden',s4d:'Reproduzierbare Fehler und Feedback melden.',emailSupport:'Support per E-Mail',betaJoin:'Beta-Programm',betaJoinD:'Beyond Commander vor der Veröffentlichung testen.'}}
 
Object.assign(I.en,{
  extensibility:'Extensible',
  extensibilityD:'WCX/WFX/WLX/WDX compatibility layers, WCL modules and native integrations.',
  modern:'Advanced operations',
  modernD:'Fast copy/move, search, synchronization, views, gallery, checksums and more.',
  multiplat:'Multi-platform support',
  multiplatD:'Native editions are available for Linux, Windows, macOS and Android.',
  open:'Open source',
  openD:'Transparent development, community feedback and a continuously evolving project.',
  perf:'High performance',
  perfD:'Responsive workflows, background tasks and caching where appropriate.'
});
Object.assign(I.hu,{
  extensibility:'Bővíthetőség',
  extensibilityD:'WCX/WFX/WLX/WDX kompatibilitási rétegek, WCL modulok és natív integrációk.',
  modern:'Fejlett műveletek',
  modernD:'Gyors másolás/mozgatás, keresés, szinkronizálás, nézetek, galéria, ellenőrzőösszegek és még sok más.',
  multiplat:'Többplatformos támogatás',
  multiplatD:'Natív kiadások érhetők el Linux, Windows, macOS és Android rendszerekre.',
  open:'Nyílt forráskód',
  openD:'Átlátható fejlesztés, közösségi visszajelzés és folyamatosan fejlődő projekt.',
  perf:'Nagy teljesítmény',
  perfD:'Reszponzív munkafolyamatok, háttérfeladatok és gyorsítótárazás, ahol indokolt.'
});
Object.assign(I.de,{
  extensibility:'Erweiterbar',
  extensibilityD:'WCX/WFX/WLX/WDX-Kompatibilitätsschichten, WCL-Module und native Integrationen.',
  modern:'Erweiterte Operationen',
  modernD:'Schnelles Kopieren/Verschieben, Suche, Synchronisierung, Ansichten, Galerie, Prüfsummen und mehr.',
  multiplat:'Multi-Plattform-Unterstützung',
  multiplatD:'Native Ausgaben sind für Linux, Windows, macOS und Android verfügbar.',
  open:'Open Source',
  openD:'Transparente Entwicklung, Community-Feedback und ein kontinuierlich wachsendes Projekt.',
  perf:'Hohe Leistung',
  perfD:'Reaktionsschnelle Abläufe, Hintergrundaufgaben und Caching, wo sinnvoll.'
});


Object.assign(I.en,{
  about:'About',
  aboutTitle:'About Beyond Commander',
  aboutLead:'Why Beyond Commander exists — and what it is meant to become.',
  aboutP1:'The motivation behind Beyond Commander was simple. Total Commander is an excellent tool, but from my perspective its 33 years of development have remained overwhelmingly Windows-focused. Even after the original Windows Commander name had to be changed to Total Commander in 2002 following concerns raised by lawyers representing the Windows trademark owner, alternative desktop platforms never became the main direction. Since I spend most of my time working on Linux and macOS systems, I wanted to bring the familiar Total Commander feeling and workflow to those platforms as well.',
  aboutP2:'And once that foundation was in place, the obvious question was: why stop there? Why not add the capabilities and modern extras that are missing from the classic Commander experience?',
  aboutP3:'That mission ultimately led to a digital Swiss Army knife — a file manager and productivity tool built to bring a system administrator’s dream toolkit to Linux, macOS, Windows and Android.',
  aboutSignature:'J.M.',
  aboutMission:'One familiar Commander workflow. More platforms. More possibilities.',
  contactTitle:'Contact',
  contactLead:'Questions, feedback or project-related inquiries are welcome.',
  contactProject:'Project',
  contactHandle:'Project handle',
  contactEmail:'Email'
});
Object.assign(I.hu,{
  about:'Rólunk',
  aboutTitle:'A Beyond Commanderről',
  aboutLead:'Miért született meg a Beyond Commander, és mivé szeretne válni.',
  aboutP1:'A Beyond Commander motivációja egyszerű volt. A Total Commander kiváló eszköz, de az én nézőpontomból a fejlesztésének 33 éve alapvetően Windows-központú maradt. Még azután sem váltak fő iránnyá az alternatív asztali platformok, hogy az eredeti Windows Commander nevet 2002-ben a Windows védjegy tulajdonosát képviselő ügyvédek kifogásai nyomán Total Commanderre kellett változtatni. Mivel az időm nagy részében Linux- és macOS-rendszereken dolgozom, a megszokott Total Commander-érzést és munkafolyamatot ezeken a platformokon is szerettem volna megteremteni.',
  aboutP2:'Ha pedig már adott ez az alap, adta magát a kérdés: miért álljunk meg itt? Miért ne kapjon olyan modern extrákat és képességeket is, amelyek a klasszikus Commander-élményből hiányoznak?',
  aboutP3:'Ebből a küldetésből végül egy digitális svájci bicska született: egy fájlkezelő és produktivitási eszköz, amely Linuxon, macOS-en, Windowson és Androidon is egy rendszeradminisztrátor álom-eszköztárát szeretné megvalósítani.',
  aboutSignature:'J.M.',
  aboutMission:'Egy ismerős Commander-munkafolyamat. Több platform. Több lehetőség.',
  contactTitle:'Kapcsolat',
  contactLead:'Kérdéseket, visszajelzéseket és a projekttel kapcsolatos megkereséseket is szívesen fogadunk.',
  contactProject:'Projekt',
  contactHandle:'Projektazonosító',
  contactEmail:'E-mail'
});
Object.assign(I.de,{
  about:'Über uns',
  aboutTitle:'Über Beyond Commander',
  aboutLead:'Warum Beyond Commander entstanden ist und wohin sich das Projekt entwickeln soll.',
  aboutP1:'Die Motivation hinter Beyond Commander war einfach. Total Commander ist ein hervorragendes Werkzeug, doch aus meiner Sicht blieben seine 33 Entwicklungsjahre überwiegend auf Windows ausgerichtet. Auch nachdem der ursprüngliche Name Windows Commander im Jahr 2002 nach Einwänden von Anwälten des Inhabers der Windows-Marke in Total Commander geändert werden musste, wurden alternative Desktop-Plattformen nicht zur Hauptrichtung. Da ich den größten Teil meiner Zeit unter Linux und macOS arbeite, wollte ich das vertraute Total-Commander-Gefühl und den gewohnten Arbeitsablauf auch auf diese Plattformen bringen.',
  aboutP2:'Und wenn dieses Fundament bereits vorhanden ist, liegt die nächste Frage auf der Hand: Warum dort aufhören? Warum nicht moderne Extras und Funktionen ergänzen, die im klassischen Commander-Erlebnis fehlen?',
  aboutP3:'Aus dieser Mission entstand schließlich ein digitales Schweizer Taschenmesser — ein Dateimanager und Produktivitätswerkzeug, das unter Linux, macOS, Windows und Android den Traum-Werkzeugkasten eines Systemadministrators verwirklichen soll.',
  aboutSignature:'J.M.',
  aboutMission:'Ein vertrauter Commander-Workflow. Mehr Plattformen. Mehr Möglichkeiten.',
  contactTitle:'Kontakt',
  contactLead:'Fragen, Feedback und projektbezogene Anfragen sind willkommen.',
  contactProject:'Projekt',
  contactHandle:'Projektkennung',
  contactEmail:'E-Mail'
});

Object.assign(I.en,{
  gallery:'Gallery',
  galleryTitle:'Screenshots',
  galleryLead:'Beyond Commander on the platforms currently represented in the project screenshot archive.',
  galleryLinux:'Linux',
  galleryAndroid:'Android',
  galleryWindows:'Windows',
  galleryMac:'macOS',
  galleryNoMac:'No macOS screenshots are available in the project repository yet.',
  galleryOpen:'Open screenshot',
  galleryClose:'Close',
  gallerySource:'Screenshots are mirrored from the official Beyond Commander GitHub repository.'
});
Object.assign(I.hu,{
  gallery:'Galéria',
  galleryTitle:'Képernyőképek',
  galleryLead:'A Beyond Commander aktuális képernyőképei platformonként rendezve.',
  galleryLinux:'Linux',
  galleryAndroid:'Android',
  galleryWindows:'Windows',
  galleryMac:'macOS',
  galleryNoMac:'A projekt GitHub-tárában jelenleg még nincs macOS képernyőkép.',
  galleryOpen:'Képernyőkép megnyitása',
  galleryClose:'Bezárás',
  gallerySource:'A képernyőképek a Beyond Commander hivatalos GitHub-tárából kerültek a weboldalba.'
});
Object.assign(I.de,{
  gallery:'Galerie',
  galleryTitle:'Screenshots',
  galleryLead:'Aktuelle Beyond-Commander-Screenshots, nach Plattform geordnet.',
  galleryLinux:'Linux',
  galleryAndroid:'Android',
  galleryWindows:'Windows',
  galleryMac:'macOS',
  galleryNoMac:'Im Projekt-Repository sind derzeit noch keine macOS-Screenshots verfügbar.',
  galleryOpen:'Screenshot öffnen',
  galleryClose:'Schließen',
  gallerySource:'Die Screenshots wurden aus dem offiziellen Beyond-Commander-GitHub-Repository in die Website übernommen.'
});


Object.assign(I.en,{
  pro:'Pro',
  proEyebrow:'Android Pro edition',
  proTitle:'Beyond Commander Pro for Android',
  proLead:'A planned premium Android edition for power users who need deeper inspection, administration and endpoint-security tools directly inside the file manager.',
  proStatus:'Planned / coming',
  proFollow:'Follow Pro releases on GitHub',
  proFeaturesTitle:'Pro tools for Android power users',
  proFeaturesLead:'The Pro roadmap extends the Android edition with integrated low-level tools while keeping the familiar Commander workflow.',
  proHex:'Hex editor',
  proHexD:'Inspect and edit files at byte level with offsets, hexadecimal values and text representation in one focused view.',
  proConsole:'Console',
  proConsoleD:'Open an integrated command console for advanced file-system and administration workflows without leaving Beyond Commander.',
  proVirus:'Virus scan',
  proVirusD:'Run on-demand file and folder malware checks from the Android file-management workflow, with clear scan status and results.',
  proOps:'Advanced operations',
  proOpsD:'Extended batch, queue and power-user operations designed for larger or more complex file-management jobs.',
  proSentinel:'Sentinel Endpoint',
  proSentinelD:'Planned integration with Sentinel Endpoint for device-security status, protection telemetry and security-oriented actions.',
  proRoadmapTitle:'Built on Beyond Commander Android',
  proRoadmapD:'Pro is a planned extension of the Android edition. The standard Android experience remains the foundation; Pro adds the advanced tools above as they become ready.',
  githubVisit:'Visit GitHub releases'
});
Object.assign(I.hu,{
  pro:'Pro',
  proEyebrow:'Android Pro kiadás',
  proTitle:'Beyond Commander Pro Androidra',
  proLead:'Tervezett prémium Android kiadás haladó felhasználóknak, mélyebb fájlvizsgálati, adminisztrációs és végpontvédelmi eszközökkel közvetlenül a fájlkezelőben.',
  proStatus:'Tervezett / érkezik',
  proFollow:'Pro kiadások követése a GitHubon',
  proFeaturesTitle:'Pro eszközök haladó Android felhasználóknak',
  proFeaturesLead:'A Pro ütemterv integrált alacsony szintű eszközökkel bővíti az Android kiadást, a megszokott Commander munkafolyamat megtartásával.',
  proHex:'Hex szerkesztő',
  proHexD:'Fájlok bájtszintű vizsgálata és szerkesztése offsetekkel, hexadecimális értékekkel és szöveges megjelenítéssel.',
  proConsole:'Konzol',
  proConsoleD:'Integrált parancskonzol fejlett fájlrendszer- és adminisztrációs feladatokhoz a Beyond Commander elhagyása nélkül.',
  proVirus:'Vírusellenőrzés',
  proVirusD:'Igény szerinti fájl- és mappaellenőrzés az Android fájlkezelési munkafolyamatból, egyértelmű állapot- és eredményjelzéssel.',
  proOps:'Haladó műveletek',
  proOpsD:'Kiterjesztett kötegelt, sorba állított és haladó műveletek nagyobb vagy összetettebb fájlkezelési feladatokhoz.',
  proSentinel:'Sentinel Endpoint',
  proSentinelD:'Tervezett Sentinel Endpoint integráció az eszközvédelmi állapothoz, telemetriához és biztonsági műveletekhez.',
  proRoadmapTitle:'A Beyond Commander Android alapjaira épül',
  proRoadmapD:'A Pro az Android kiadás tervezett bővítése. A standard Android élmény marad az alap, a Pro pedig az elkészült haladó eszközökkel egészíti ki.',
  githubVisit:'GitHub kiadások megnyitása'
});
Object.assign(I.de,{
  pro:'Pro',
  proEyebrow:'Android-Pro-Edition',
  proTitle:'Beyond Commander Pro für Android',
  proLead:'Eine geplante Premium-Android-Edition für Power-User mit tieferen Prüf-, Administrations- und Endpoint-Sicherheitswerkzeugen direkt im Dateimanager.',
  proStatus:'Geplant / kommt',
  proFollow:'Pro-Releases auf GitHub verfolgen',
  proFeaturesTitle:'Pro-Werkzeuge für Android-Power-User',
  proFeaturesLead:'Die Pro-Roadmap erweitert die Android-Edition um integrierte Low-Level-Werkzeuge und behält den vertrauten Commander-Workflow bei.',
  proHex:'Hex-Editor',
  proHexD:'Dateien auf Byte-Ebene mit Offsets, Hex-Werten und Textdarstellung untersuchen und bearbeiten.',
  proConsole:'Konsole',
  proConsoleD:'Eine integrierte Befehlskonsole für fortgeschrittene Dateisystem- und Administrationsabläufe öffnen.',
  proVirus:'Virenscan',
  proVirusD:'Dateien und Ordner bei Bedarf direkt aus dem Android-Dateimanager prüfen, mit klaren Status- und Ergebnisanzeigen.',
  proOps:'Erweiterte Operationen',
  proOpsD:'Erweiterte Batch-, Queue- und Power-User-Funktionen für größere oder komplexere Dateiverwaltungsaufgaben.',
  proSentinel:'Sentinel Endpoint',
  proSentinelD:'Geplante Integration mit Sentinel Endpoint für Gerätesicherheitsstatus, Telemetrie und sicherheitsbezogene Aktionen.',
  proRoadmapTitle:'Auf Beyond Commander Android aufgebaut',
  proRoadmapD:'Pro ist eine geplante Erweiterung der Android-Edition. Die Standard-Android-Erfahrung bleibt die Basis; Pro ergänzt die erweiterten Werkzeuge, sobald sie bereit sind.',
  githubVisit:'GitHub-Releases öffnen'
});


/* Complete page translation bundle */
Object.assign(I.en,{"titleHome":"Beyond Commander","titleFeatures":"Features — Beyond Commander","titleGallery":"Gallery — Beyond Commander","titlePlugins":"Plugins — Beyond Commander","titlePro":"Beyond Commander Pro for Android","titleLicense":"License — Beyond Commander","titleSupport":"Support & Contact — Beyond Commander","titleAbout":"About — Beyond Commander","footerTagline":"File management beyond the classic Commander model.","orderLater":"License ordering will be activated later.","releaseWindows":"Open Windows releases","releaseLinux":"Open Linux releases","releaseMac":"Open macOS releases","releaseAndroid":"Open Android releases","featuresIntro":"Beyond Commander combines the familiar Commander workflow with modern tools for browsing, searching, comparing, synchronizing and managing files across Linux, Windows, macOS and Android.","featuresGithub":"See GitHub Releases","featuresGallery":"View Gallery","featurePillPanels":"Dual-pane + optional 3-panel workflow","featurePillQueue":"Queue-based background operations","featurePillArchives":"Archive browsing & compression","featurePillPlatforms":"Native Linux, Windows, macOS and Android editions","featuresWhatTitle":"What users get","featuresWhatLead":"Beyond Commander focuses on fast everyday file management, but also includes the tools power users expect when they work with larger folders, archives, comparisons, remote locations and advanced workflows.","featureMiniWorkflowTitle":"Commander workflow","featureMiniWorkflowD":"Dual-pane file management, classic function-key actions, optional 3-panel layout and productive keyboard use.","featureMiniViewsTitle":"Real views and navigation","featureMiniViewsD":"Tabs, favorites, saved sessions, folder tree, gallery and thumbnail views, branch view and custom columns.","featureMiniOpsTitle":"Serious file operations","featureMiniOpsD":"Queue Manager, background copy and move, pause/resume, speed metrics, ETA, logs and optional SHA-256 verification.","featureMiniToolsTitle":"Built-in tools","featureMiniToolsD":"Viewer, Quick View, compare/sync, terminal, ISO writer, Vault tools, checksums and network places.","featuresListTitle":"Real feature list","featuresListLead":"The list below focuses on user-facing capabilities already present or integrated in Beyond Commander, without the low-level packaging and developer-only details.","featureWorkflowTitle":"Commander workflow","featureWorkflow1":"Dual-pane file management with optional third panel","featureWorkflow2":"F3 Viewer, F4 Edit, F5 Copy, F6 Move, F7 New folder and F8 Delete workflows","featureWorkflow3":"TC-style and MC-style keyboard behavior profiles","featureWorkflow4":"Inline rename, slow double-click rename and multi-rename","featureWorkflow5":"Commander-style selection, marking and drag & drop copy or move","featureNavigationTitle":"Navigation, tabs and views","featureNavigation1":"Tabs per panel with session restore","featureNavigation2":"Favorites and pinned folders","featureNavigation3":"Detailed, compact and thumbnail views","featureNavigation4":"Gallery view, folder tree and folder list","featureNavigation5":"Branch view, custom columns and remembered layout state","featureSearchTitle":"Search and quick filtering","featureSearch1":"Full recursive search","featureSearch2":"Quick in-panel filtering with Ctrl+S","featureSearch3":"Type-to-jump behavior with configurable modes","featureSearch4":"Case-sensitive and start/end matching options","featureSearch5":"Ignore list for files, folders and path patterns","featureCopyTitle":"Copy, move and Queue Manager","featureCopy1":"Background copy and move operations","featureCopy2":"Queue Manager with running, waiting and completed tasks","featureCopy3":"Pause, resume, retry and cancel support","featureCopy4":"Progress, speed, average, min/max and ETA indicators","featureCopy5":"Operation logs and optional SHA-256 verification after copy","featureViewerTitle":"Viewer, editing and Quick View","featureViewer1":"Built-in F3 Viewer","featureViewer2":"Quick View in the opposite panel with live cursor tracking","featureViewer3":"Text, source, script and configuration file preview","featureViewer4":"Syntax highlighting and image preview integration","featureViewer5":"Internal or external editor choice","featureCompareTitle":"Compare, diff and synchronize","featureCompare1":"Directory comparison between the two panels","featureCompare2":"Compare by size and time, with optional SHA-256 checking","featureCompare3":"Folder synchronization with left-to-right, right-to-left or two-way preview","featureCompare4":"Side-by-side text diff with change navigation","featureCompare5":"Patch save and patch apply support, plus binary hex-based comparison","featureArchivesTitle":"Archives and compression","featureArchives1":"Browse archives like folders","featureArchives2":"ZIP, 7z, RAR and tar-family format support","featureArchives3":"Lazy browsing for large archives and targeted extraction when needed","featureArchives4":"Extract entire archives or only selected items","featureArchives5":"Create ZIP, 7z, RAR, TAR, TGZ, TBZ2, TXZ, ZST and LZMA archives","featureNetworkTitle":"Network and remote access","featureNetwork1":"Network Places panel and saved remote locations","featureNetwork2":"Quick Connection workflow","featureNetwork3":"SMB / UNC browsing and network drive handling","featureNetwork4":"FTP sessions with live log view","featureNetwork5":"Remote browsing support on platforms where the integration is available","featureTerminalTitle":"Terminal and built-in tools","featureTerminal1":"Built-in command line and full terminal view","featureTerminal2":"ISO / IMG writer and mount helpers","featureTerminal3":"Vault / secure storage tools","featureTerminal4":"Checksum generation and verification","featureTerminal5":"Drive, storage and file-list helper tools","featureCustomizeTitle":"Customization and platform support","featureCustomize1":"Light and dark themes with configurable selection colors","featureCustomize2":"Custom button bars, drive bars and view settings","featureCustomize3":"Configurable icons, fonts, thumbnails and zoom","featureCustomize4":"Built-in help and multi-language interface","featureCustomize5":"Native Linux desktop, native Windows, macOS and separate Android editions","featuresPlatformsTitle":"Available on multiple platforms","featuresPlatformsD":"Windows, Linux, macOS and Android editions are active. The Pro page separately highlights planned Android power-user extras.","featuresImageAlt":"Beyond Commander feature comparison","pluginCatalogue":"Official catalogue ↗","wclTitle":"WCL modules","wclDesc":"This block is ready for direct links to Beyond Commander/community WCL modules as they are published.","thirdPartyTitle":"3rd-party plugin usage","compatRef":"TotalcmdWiki compatibility reference ↗","pluginsImageAlt":"Beyond Commander feature and extensibility comparison","bugReportsTitle":"Bug reports","bugReportsLead":"Bug reports and requests are accepted exclusively on GitHub. Do not send them by email!","bugReportsWindows":"Windows","bugReportsLinux":"Linux","bugReportsMac":"Mac","bugReportsAndroid":"Android","galleryLinuxDesktop1":"Linux — Desktop 1","galleryLinuxDesktop2":"Linux — Desktop 2","galleryLinuxDesktop3":"Linux — Desktop 3","galleryAndroidAlpha2":"Android — Alpha 2","galleryAndroidTablet1":"Android — Tablet 1","galleryAndroidTablet2":"Android — Tablet 2","galleryAndroidTablet3":"Android — Tablet 3","galleryAndroidMobile1":"Android — Mobile 1","galleryAndroidMobile2":"Android — Mobile 2","galleryWindowsDark":"Windows 10 — Dark","galleryWindowsLight":"Windows 10 — Light","mockUnregistered":"UNREGISTERED","mockFile":"File","mockMark":"Mark","mockCommands":"Commands","mockNetwork":"Network","mockView":"View","mockConfiguration":"Configuration","mockStart":"Start","mockHelp":"Help","mockFree":"free","mockName":"Name","mockExt":"Ext","mockSize":"Size","mockDate":"Date","mockFiles":"files","mockFolders":"folders","mockBytes":"bytes","mockF3View":"F3 View","mockF4Edit":"F4 Edit","mockF5Copy":"F5 Copy","mockF6Move":"F6 Move","mockF7NewFolder":"F7 New folder","mockF8Delete":"F8 Delete","mockExit":"Alt+F4 Exit","mockDocuments":"Documents","mockMusic":"Music","mockPictures":"Pictures","mockVideos":"Videos","mockTemplates":"Templates"});
Object.assign(I.hu,{"titleHome":"Beyond Commander","titleFeatures":"Funkciók — Beyond Commander","titleGallery":"Galéria — Beyond Commander","titlePlugins":"Bővítmények — Beyond Commander","titlePro":"Beyond Commander Pro Androidra","titleLicense":"Licenc — Beyond Commander","titleSupport":"Támogatás és kapcsolat — Beyond Commander","titleAbout":"Névjegy — Beyond Commander","footerTagline":"Fájlkezelés a klasszikus Commander modellen túl.","orderLater":"A licenc megrendelése később lesz aktiválva.","releaseWindows":"Windows kiadások megnyitása","releaseLinux":"Linux kiadások megnyitása","releaseMac":"macOS kiadások megnyitása","releaseAndroid":"Android kiadások megnyitása","featuresIntro":"A Beyond Commander a megszokott Commander munkafolyamatot modern böngészési, keresési, összehasonlítási, szinkronizálási és fájlkezelési eszközökkel egészíti ki Linuxon, Windowson, macOS-en és Androidon.","featuresGithub":"GitHub kiadások megtekintése","featuresGallery":"Galéria megnyitása","featurePillPanels":"Kétpaneles + opcionális 3 paneles munkafolyamat","featurePillQueue":"Háttérben futó, sorba állított műveletek","featurePillArchives":"Archívumböngészés és tömörítés","featurePillPlatforms":"Natív Linux, Windows, macOS és Android kiadások","featuresWhatTitle":"Mit kap a felhasználó?","featuresWhatLead":"A Beyond Commander a gyors mindennapi fájlkezelésre épít, de tartalmazza azokat az eszközöket is, amelyekre a haladó felhasználóknak nagy mappák, archívumok, összehasonlítások, távoli helyek és összetettebb munkafolyamatok során szükségük van.","featureMiniWorkflowTitle":"Commander munkafolyamat","featureMiniWorkflowD":"Kétpaneles fájlkezelés, klasszikus funkcióbillentyűs műveletek, opcionális 3 paneles elrendezés és hatékony billentyűzetes használat.","featureMiniViewsTitle":"Valódi nézetek és navigáció","featureMiniViewsD":"Fülek, kedvencek, mentett munkamenetek, mappafa, galéria- és bélyegképnézet, ág-nézet és egyéni oszlopok.","featureMiniOpsTitle":"Komoly fájlműveletek","featureMiniOpsD":"Queue Manager, háttérben futó másolás és áthelyezés, szünet/folytatás, sebességmérés, ETA, naplók és opcionális SHA-256 ellenőrzés.","featureMiniToolsTitle":"Beépített eszközök","featureMiniToolsD":"Nézőke, Quick View, összehasonlítás/szinkronizálás, terminál, ISO-író, Vault eszközök, ellenőrzőösszegek és hálózati helyek.","featuresListTitle":"Valódi funkciólista","featuresListLead":"Az alábbi lista a Beyond Commanderben már elérhető vagy integrált, felhasználóknak szánt képességekre koncentrál, a csomagolási és fejlesztői részletek nélkül.","featureWorkflowTitle":"Commander munkafolyamat","featureWorkflow1":"Kétpaneles fájlkezelés opcionális harmadik panellel","featureWorkflow2":"F3 Nézőke, F4 Szerkesztés, F5 Másolás, F6 Áthelyezés, F7 Új mappa és F8 Törlés munkafolyamat","featureWorkflow3":"TC- és MC-jellegű billentyűzet-viselkedési profilok","featureWorkflow4":"Helyben átnevezés, lassú dupla kattintásos átnevezés és Multi-Rename","featureWorkflow5":"Commander-jellegű kijelölés, megjelölés és fogd-és-vidd másolás vagy áthelyezés","featureNavigationTitle":"Navigáció, fülek és nézetek","featureNavigation1":"Panelenkénti fülek munkamenet-visszaállítással","featureNavigation2":"Kedvencek és rögzített mappák","featureNavigation3":"Részletes, kompakt és bélyegképnézet","featureNavigation4":"Galérianézet, mappafa és mappalista","featureNavigation5":"Ág-nézet, egyéni oszlopok és megjegyzett elrendezés","featureSearchTitle":"Keresés és gyorsszűrés","featureSearch1":"Teljes rekurzív keresés","featureSearch2":"Gyors panelszűrés Ctrl+S billentyűvel","featureSearch3":"Gépelésre ugrás konfigurálható módokkal","featureSearch4":"Kis- és nagybetűérzékeny, illetve eleje/vége egyezési beállítások","featureSearch5":"Mellőzési lista fájlokhoz, mappákhoz és útvonalmintákhoz","featureCopyTitle":"Másolás, áthelyezés és Queue Manager","featureCopy1":"Háttérben futó másolási és áthelyezési műveletek","featureCopy2":"Queue Manager futó, várakozó és befejezett feladatokkal","featureCopy3":"Szüneteltetés, folytatás, újrapróbálás és megszakítás","featureCopy4":"Folyamat, sebesség, átlag, minimum/maximum és ETA kijelzés","featureCopy5":"Műveleti naplók és opcionális SHA-256 ellenőrzés másolás után","featureViewerTitle":"Nézőke, szerkesztés és Quick View","featureViewer1":"Beépített F3 Nézőke","featureViewer2":"Quick View az ellenkező panelen, élő kurzorkövetéssel","featureViewer3":"Szöveg-, forrás-, script- és konfigurációsfájl-előnézet","featureViewer4":"Szintaxiskiemelés és képelőnézet integráció","featureViewer5":"Belső vagy külső szerkesztő választása","featureCompareTitle":"Összehasonlítás, diff és szinkronizálás","featureCompare1":"Könyvtár-összehasonlítás a két panel között","featureCompare2":"Összehasonlítás méret és idő alapján, opcionális SHA-256 ellenőrzéssel","featureCompare3":"Mappaszinkronizálás balról jobbra, jobbról balra vagy kétirányú előnézettel","featureCompare4":"Egymás melletti szöveges diff változásnavigációval","featureCompare5":"Patch mentés és alkalmazás, valamint bináris hex alapú összehasonlítás","featureArchivesTitle":"Archívumok és tömörítés","featureArchives1":"Archívumok böngészése mappaként","featureArchives2":"ZIP, 7z, RAR és tar-család támogatás","featureArchives3":"Lusta betöltés nagy archívumokhoz és célzott kibontás szükség esetén","featureArchives4":"Teljes archívum vagy csak a kijelölt elemek kibontása","featureArchives5":"ZIP, 7z, RAR, TAR, TGZ, TBZ2, TXZ, ZST és LZMA archívumok létrehozása","featureNetworkTitle":"Hálózat és távoli hozzáférés","featureNetwork1":"Hálózati helyek panel és mentett távoli helyek","featureNetwork2":"Gyorskapcsolat munkafolyamat","featureNetwork3":"SMB / UNC böngészés és hálózati meghajtók kezelése","featureNetwork4":"FTP munkamenetek élő naplónézettel","featureNetwork5":"Távoli böngészés azokon a platformokon, ahol az integráció elérhető","featureTerminalTitle":"Terminál és beépített eszközök","featureTerminal1":"Beépített parancssor és teljes terminálnézet","featureTerminal2":"ISO / IMG író és csatolási segédeszközök","featureTerminal3":"Vault / biztonságos tárolási eszközök","featureTerminal4":"Ellenőrzőösszeg-készítés és ellenőrzés","featureTerminal5":"Meghajtó-, tárhely- és fájllista-segédeszközök","featureCustomizeTitle":"Testreszabás és platformtámogatás","featureCustomize1":"Világos és sötét témák állítható kijelölési színekkel","featureCustomize2":"Egyéni gombsorok, meghajtósorok és nézetbeállítások","featureCustomize3":"Állítható ikonok, betűk, bélyegképek és nagyítás","featureCustomize4":"Beépített súgó és többnyelvű felület","featureCustomize5":"Natív Linux desktop, natív Windows, macOS és külön Android kiadás","featuresPlatformsTitle":"Több platformon elérhető","featuresPlatformsD":"A Windows, Linux, macOS és Android kiadások aktívak. A Pro oldal külön mutatja a tervezett Androidos haladó funkciókat.","featuresImageAlt":"Beyond Commander funkció-összehasonlítás","pluginCatalogue":"Hivatalos katalógus ↗","wclTitle":"WCL modulok","wclDesc":"Ez a rész a Beyond Commander és a közösség WCL moduljainak közvetlen hivatkozásaihoz készült, amint azok publikálásra kerülnek.","thirdPartyTitle":"Külső pluginok használata","compatRef":"TotalcmdWiki kompatibilitási referencia ↗","pluginsImageAlt":"Beyond Commander funkció- és bővíthetőségi összehasonlítás","bugReportsTitle":"Hibajelentések","bugReportsLead":"Hibajelentéseket és kéréseket kizárólag a GitHubon fogadunk el. E-mailben ne küldj ilyet!","bugReportsWindows":"Windows","bugReportsLinux":"Linux","bugReportsMac":"Mac","bugReportsAndroid":"Android","galleryLinuxDesktop1":"Linux — Asztali 1","galleryLinuxDesktop2":"Linux — Asztali 2","galleryLinuxDesktop3":"Linux — Asztali 3","galleryAndroidAlpha2":"Android — Alfa 2","galleryAndroidTablet1":"Android — Tablet 1","galleryAndroidTablet2":"Android — Tablet 2","galleryAndroidTablet3":"Android — Tablet 3","galleryAndroidMobile1":"Android — Mobil 1","galleryAndroidMobile2":"Android — Mobil 2","galleryWindowsDark":"Windows 10 — Sötét","galleryWindowsLight":"Windows 10 — Világos","mockUnregistered":"NEM REGISZTRÁLT","mockFile":"Fájl","mockMark":"Kijelölés","mockCommands":"Parancsok","mockNetwork":"Hálózat","mockView":"Nézet","mockConfiguration":"Beállítások","mockStart":"Indítás","mockHelp":"Súgó","mockFree":"szabad","mockName":"Név","mockExt":"Kit.","mockSize":"Méret","mockDate":"Dátum","mockFiles":"fájl","mockFolders":"mappa","mockBytes":"bájt","mockF3View":"F3 Nézőke","mockF4Edit":"F4 Szerkeszt","mockF5Copy":"F5 Másol","mockF6Move":"F6 Áthelyez","mockF7NewFolder":"F7 Új mappa","mockF8Delete":"F8 Töröl","mockExit":"Alt+F4 Kilép","mockDocuments":"Dokumentumok","mockMusic":"Zene","mockPictures":"Képek","mockVideos":"Videók","mockTemplates":"Sablonok"});
Object.assign(I.de,{"titleHome":"Beyond Commander","titleFeatures":"Funktionen — Beyond Commander","titleGallery":"Galerie — Beyond Commander","titlePlugins":"Plugins — Beyond Commander","titlePro":"Beyond Commander Pro für Android","titleLicense":"Lizenz — Beyond Commander","titleSupport":"Support & Kontakt — Beyond Commander","titleAbout":"Über uns — Beyond Commander","footerTagline":"Dateiverwaltung über das klassische Commander-Modell hinaus.","orderLater":"Die Lizenzbestellung wird später aktiviert.","releaseWindows":"Windows-Releases öffnen","releaseLinux":"Linux-Releases öffnen","releaseMac":"macOS-Releases öffnen","releaseAndroid":"Android-Releases öffnen","featuresIntro":"Beyond Commander verbindet den vertrauten Commander-Workflow mit modernen Werkzeugen zum Browsen, Suchen, Vergleichen, Synchronisieren und Verwalten von Dateien unter Linux, Windows, macOS und Android.","featuresGithub":"GitHub-Releases ansehen","featuresGallery":"Galerie öffnen","featurePillPanels":"Dual-Pane + optionaler 3-Panel-Workflow","featurePillQueue":"Queue-basierte Hintergrundoperationen","featurePillArchives":"Archiv-Browsing & Komprimierung","featurePillPlatforms":"Native Linux-, Windows-, macOS- und Android-Editionen","featuresWhatTitle":"Was Benutzer bekommen","featuresWhatLead":"Beyond Commander konzentriert sich auf schnelle tägliche Dateiverwaltung und enthält zugleich die Werkzeuge, die Power-User bei großen Ordnern, Archiven, Vergleichen, entfernten Orten und anspruchsvollen Arbeitsabläufen erwarten.","featureMiniWorkflowTitle":"Commander-Workflow","featureMiniWorkflowD":"Dual-Pane-Dateiverwaltung, klassische Funktionstastenaktionen, optionales 3-Panel-Layout und produktive Tastaturbedienung.","featureMiniViewsTitle":"Echte Ansichten und Navigation","featureMiniViewsD":"Tabs, Favoriten, gespeicherte Sitzungen, Ordnerbaum, Galerie- und Miniaturansichten, Zweigansicht und benutzerdefinierte Spalten.","featureMiniOpsTitle":"Leistungsfähige Dateioperationen","featureMiniOpsD":"Queue Manager, Kopieren und Verschieben im Hintergrund, Pause/Fortsetzen, Geschwindigkeitswerte, ETA, Protokolle und optionale SHA-256-Prüfung.","featureMiniToolsTitle":"Integrierte Werkzeuge","featureMiniToolsD":"Viewer, Quick View, Vergleich/Synchronisierung, Terminal, ISO-Schreiber, Vault-Werkzeuge, Prüfsummen und Netzwerkorte.","featuresListTitle":"Tatsächliche Funktionsliste","featuresListLead":"Die folgende Liste konzentriert sich auf bereits verfügbare oder integrierte benutzerorientierte Funktionen von Beyond Commander, ohne Paketierungs- und Entwicklerdetails.","featureWorkflowTitle":"Commander-Workflow","featureWorkflow1":"Dual-Pane-Dateiverwaltung mit optionalem dritten Panel","featureWorkflow2":"F3 Viewer, F4 Bearbeiten, F5 Kopieren, F6 Verschieben, F7 Neuer Ordner und F8 Löschen","featureWorkflow3":"TC- und MC-artige Tastaturverhaltensprofile","featureWorkflow4":"Inline-Umbenennen, langsamer Doppelklick zum Umbenennen und Multi-Rename","featureWorkflow5":"Commander-artige Auswahl, Markierung und Drag-&-Drop-Kopieren oder -Verschieben","featureNavigationTitle":"Navigation, Tabs und Ansichten","featureNavigation1":"Tabs pro Panel mit Sitzungswiederherstellung","featureNavigation2":"Favoriten und angeheftete Ordner","featureNavigation3":"Detail-, Kompakt- und Miniaturansichten","featureNavigation4":"Galerieansicht, Ordnerbaum und Ordnerliste","featureNavigation5":"Zweigansicht, benutzerdefinierte Spalten und gespeicherter Layoutzustand","featureSearchTitle":"Suche und Schnellfilter","featureSearch1":"Vollständige rekursive Suche","featureSearch2":"Schnelles Panel-Filtern mit Strg+S","featureSearch3":"Tippen-zum-Springen mit konfigurierbaren Modi","featureSearch4":"Optionen für Groß-/Kleinschreibung sowie Anfangs-/Endtreffer","featureSearch5":"Ignorierliste für Dateien, Ordner und Pfadmuster","featureCopyTitle":"Kopieren, Verschieben und Queue Manager","featureCopy1":"Kopier- und Verschiebeoperationen im Hintergrund","featureCopy2":"Queue Manager mit laufenden, wartenden und abgeschlossenen Aufgaben","featureCopy3":"Pause, Fortsetzen, Wiederholen und Abbrechen","featureCopy4":"Fortschritt, Geschwindigkeit, Durchschnitt, Minimum/Maximum und ETA","featureCopy5":"Operationsprotokolle und optionale SHA-256-Prüfung nach dem Kopieren","featureViewerTitle":"Viewer, Bearbeiten und Quick View","featureViewer1":"Integrierter F3 Viewer","featureViewer2":"Quick View im gegenüberliegenden Panel mit Live-Cursorverfolgung","featureViewer3":"Vorschau für Text-, Quell-, Skript- und Konfigurationsdateien","featureViewer4":"Syntaxhervorhebung und integrierte Bildvorschau","featureViewer5":"Wahl zwischen internem und externem Editor","featureCompareTitle":"Vergleichen, Diff und Synchronisieren","featureCompare1":"Verzeichnisvergleich zwischen den beiden Panels","featureCompare2":"Vergleich nach Größe und Zeit mit optionaler SHA-256-Prüfung","featureCompare3":"Ordnersynchronisierung links→rechts, rechts→links oder bidirektional mit Vorschau","featureCompare4":"Text-Diff nebeneinander mit Navigation durch Änderungen","featureCompare5":"Patch speichern/anwenden sowie binärer hexadezimaler Vergleich","featureArchivesTitle":"Archive und Komprimierung","featureArchives1":"Archive wie Ordner durchsuchen","featureArchives2":"Unterstützung für ZIP, 7z, RAR und die tar-Familie","featureArchives3":"Lazy-Browsing für große Archive und gezielte Extraktion bei Bedarf","featureArchives4":"Komplette Archive oder nur ausgewählte Elemente extrahieren","featureArchives5":"ZIP-, 7z-, RAR-, TAR-, TGZ-, TBZ2-, TXZ-, ZST- und LZMA-Archive erstellen","featureNetworkTitle":"Netzwerk und Fernzugriff","featureNetwork1":"Netzwerkorte-Panel und gespeicherte entfernte Orte","featureNetwork2":"Quick-Connection-Workflow","featureNetwork3":"SMB-/UNC-Browsing und Netzlaufwerksverwaltung","featureNetwork4":"FTP-Sitzungen mit Live-Protokollansicht","featureNetwork5":"Remote-Browsing auf Plattformen, auf denen die Integration verfügbar ist","featureTerminalTitle":"Terminal und integrierte Werkzeuge","featureTerminal1":"Integrierte Kommandozeile und vollständige Terminalansicht","featureTerminal2":"ISO-/IMG-Schreiber und Einhänge-Hilfen","featureTerminal3":"Vault-/Secure-Storage-Werkzeuge","featureTerminal4":"Prüfsummen erzeugen und verifizieren","featureTerminal5":"Hilfswerkzeuge für Laufwerke, Speicher und Dateilisten","featureCustomizeTitle":"Anpassung und Plattformunterstützung","featureCustomize1":"Helle und dunkle Themen mit konfigurierbaren Auswahlfarben","featureCustomize2":"Benutzerdefinierte Button-Leisten, Laufwerksleisten und Ansichtseinstellungen","featureCustomize3":"Konfigurierbare Symbole, Schriften, Miniaturen und Zoom","featureCustomize4":"Integrierte Hilfe und mehrsprachige Oberfläche","featureCustomize5":"Native Linux-Desktop-, Windows-, macOS- und separate Android-Editionen","featuresPlatformsTitle":"Auf mehreren Plattformen verfügbar","featuresPlatformsD":"Windows-, Linux-, macOS- und Android-Editionen sind aktiv. Die Pro-Seite zeigt separat geplante Android-Power-User-Extras.","featuresImageAlt":"Beyond-Commander-Funktionsvergleich","pluginCatalogue":"Offizieller Katalog ↗","wclTitle":"WCL-Module","wclDesc":"Dieser Bereich ist für direkte Links zu Beyond-Commander- und Community-WCL-Modulen vorgesehen, sobald sie veröffentlicht werden.","thirdPartyTitle":"Nutzung von Drittanbieter-Plugins","compatRef":"TotalcmdWiki-Kompatibilitätsreferenz ↗","pluginsImageAlt":"Beyond-Commander-Vergleich zu Funktionen und Erweiterbarkeit","bugReportsTitle":"Fehlermeldungen","bugReportsLead":"Fehlermeldungen und Anfragen werden ausschließlich auf GitHub akzeptiert. Bitte nicht per E-Mail senden!","bugReportsWindows":"Windows","bugReportsLinux":"Linux","bugReportsMac":"Mac","bugReportsAndroid":"Android","galleryLinuxDesktop1":"Linux — Desktop 1","galleryLinuxDesktop2":"Linux — Desktop 2","galleryLinuxDesktop3":"Linux — Desktop 3","galleryAndroidAlpha2":"Android — Alpha 2","galleryAndroidTablet1":"Android — Tablet 1","galleryAndroidTablet2":"Android — Tablet 2","galleryAndroidTablet3":"Android — Tablet 3","galleryAndroidMobile1":"Android — Mobil 1","galleryAndroidMobile2":"Android — Mobil 2","galleryWindowsDark":"Windows 10 — Dunkel","galleryWindowsLight":"Windows 10 — Hell","mockUnregistered":"NICHT REGISTRIERT","mockFile":"Datei","mockMark":"Markieren","mockCommands":"Befehle","mockNetwork":"Netzwerk","mockView":"Ansicht","mockConfiguration":"Konfiguration","mockStart":"Start","mockHelp":"Hilfe","mockFree":"frei","mockName":"Name","mockExt":"Erw.","mockSize":"Größe","mockDate":"Datum","mockFiles":"Dateien","mockFolders":"Ordner","mockBytes":"Bytes","mockF3View":"F3 Anzeigen","mockF4Edit":"F4 Bearbeiten","mockF5Copy":"F5 Kopieren","mockF6Move":"F6 Verschieben","mockF7NewFolder":"F7 Neuer Ordner","mockF8Delete":"F8 Löschen","mockExit":"Alt+F4 Beenden","mockDocuments":"Dokumente","mockMusic":"Musik","mockPictures":"Bilder","mockVideos":"Videos","mockTemplates":"Vorlagen","pluginWidgetTitle":"Plugins & WCL-Module","pluginWidgetCopy":"Erweitern Sie Beyond Commander mit zusätzlichen Community-Plugin-Funktionen.","pluginWidgetButton":"Plugins herunterladen"});


Object.assign(I.en,{
  s4d:'Report reproducible bugs and requests in the platform-specific GitHub issue tracker.',
  emailSupport:'General support by email',
  galleryPreview:'Screenshot preview'
});
Object.assign(I.hu,{
  s4d:'A reprodukálható hibákat és kéréseket a megfelelő platform GitHub issue trackerében jelentsd.',
  emailSupport:'Általános támogatás e-mailben',
  galleryPreview:'Képernyőkép előnézet'
});
Object.assign(I.de,{
  s4d:'Reproduzierbare Fehler und Anfragen im plattformspezifischen GitHub-Issue-Tracker melden.',
  emailSupport:'Allgemeiner Support per E-Mail',
  galleryPreview:'Screenshot-Vorschau'
});

let lang=localStorage.getItem('bc-lang')||'en'; function t(k){return I[lang]?.[k]||I.en[k]||k} function setLang(x){lang=I[x]?x:'en';localStorage.setItem('bc-lang',lang);render();closeLang()} function closeLang(){document.querySelector('.lang-menu')?.classList.remove('open')}
function nav(active){return `<header class="site-header"><div class="wrap navbar"><a class="brand" href="index.html"><img class="brand-logo" src="assets/bc2.svg" alt="Beyond Commander"><span><strong>BEYOND COMMANDER</strong><small data-i18n="tagline"></small></span></a><nav class="navlinks"><a href="index.html" class="${active==='home'?'active':''}" data-i18n="home"></a><a href="features.html" class="${active==='features'?'active':''}" data-i18n="features"></a><a href="gallery.html" class="${active==='gallery'?'active':''}" data-i18n="gallery"></a><a href="plugins.html" class="${active==='plugins'?'active':''}" data-i18n="plugins"></a><a href="pro.html" class="${active==='pro'?'active':''}" data-i18n="pro"></a><a href="license.html" class="${active==='license'?'active':''}" data-i18n="license"></a><a href="support.html" class="${active==='support'?'active':''}" data-i18n="support"></a><a href="about.html" class="${active==='about'?'active':''}" data-i18n="about"></a></nav><div class="lang"><button data-lang-label></button><div class="lang-menu"><button onclick="setLang('en')">English</button><button onclick="setLang('hu')">Magyar</button><button onclick="setLang('de')">Deutsch</button></div></div></div></header>`}
function footer(){return `<footer class="footer"><div class="wrap"><strong>Beyond Commander</strong><div data-i18n="footerTagline"></div></div></footer>`}
const L=[
['📁 [..]','','','',''],
['📁 Documents','','','2024-05-28 10:31',''],
['📁 Music','','','2024-05-28 10:38',''],
['📁 Pictures','','','2024-05-28 10:38',''],
['📁 Videos','','','2024-05-28 10:33',''],
['📄 Desktop.ini','ini','174','2024-05-27 10:20',''],
['📄 notes.txt','txt','2 560','2024-05-27 14:18',''],
['📄 readme.md','md','1 024','2024-05-26 09:41','']
],R=[
['📁 [..]','','','',''],
['📁 Documents','','','2024-05-28 10:31',''],
['📁 Music','','','2024-05-28 10:38',''],
['📁 Videos','','','2024-05-28 10:33',''],
['📁 Templates','','','2024-05-28 10:31',''],
['📄 .bashrc','','3 842','2024-05-26 11:02',''],
['📄 notes.txt','txt','1 256','2024-05-28 09:15',''],
['📦 backup.tar.gz','gz','16 384 512','2024-05-26 17:33',''],
['📄 report.pdf','pdf','245 760','2024-05-25 13:47','']
];
const appTabs=['C','LINUX'];

const mockNameKeys={
  '📁 Documents':'mockDocuments',
  '📁 Music':'mockMusic',
  '📁 Pictures':'mockPictures',
  '📁 Videos':'mockVideos',
  '📁 Templates':'mockTemplates'
};
function mockDisplayName(name){
  const key=mockNameKeys[name];
  if(!key)return name;
  const prefix=name.slice(0,2);
  return prefix+t(key);
}

function rows(a, selectedIndex){
  return a.map((r,i)=>`<div class="file-row${i===selectedIndex?' selected':''}">
    <span>${mockDisplayName(r[0])}</span><span>${r[1]}</span><span>${r[2]}</span><span>${r[3]}</span>
  </div>`).join('')
}
function mock(){
  return `<div class="bc-window">
    <div class="bc-titlebar">
      <div class="bc-title">Beyond Commander — Prototype 0.6.13 - ${t('mockUnregistered')}</div>
      <div class="bc-win-actions"><span class="violet"></span><span class="green"></span><span class="pink"></span></div>
    </div>
    <div class="bc-menu"><span>${t('mockFile')}</span><span>${t('mockMark')}</span><span>${t('mockCommands')}</span><span>${t('mockNetwork')}</span><span>${t('mockView')}</span><span>${t('mockConfiguration')}</span><span>${t('mockStart')}</span><span>${t('mockHelp')}</span></div>
    <div class="bc-toolbar">
      <span class="tool cyan">↻</span><span class="sep"></span>
      <span class="tool amber">↥</span><span class="tool amber">🖼</span><span class="sep"></span>
      <span class="tool blue">↶</span><span class="tool blue">↷</span><span class="tool blue">⬆</span><span class="tool blue">⬇</span><span class="sep"></span>
      <span class="tool orange">📦</span><span class="tool orange">📥</span><span class="tool red">FTP</span><span class="tool green">URL</span><span class="sep"></span>
      <span class="tool cyan">⌕</span><span class="tool gray">▥</span><span class="tool green">⟳</span><span class="sep"></span>
      <span class="tool sand">☷</span>
    </div>
    <div class="bc-barline">
      <span class="drivebox"><b>[C:]</b> 118.2 GB / 237.9 GB ${t('mockFree')}</span>
      <span class="drivebox"><b>[LINUX]</b> 52.4 GB / 105.2 GB ${t('mockFree')}</span>
    </div>
    <div class="bc-panelshell">
      <div class="bc-panel">
        <div class="path">C:\\Users\\User\\Documents</div>
        <div class="file-head"><span>${t('mockName')}</span><span>${t('mockExt')}</span><span>${t('mockSize')}</span><span>${t('mockDate')}</span></div>
        <div class="file-list">${rows(L,-1)}</div>
      </div>
      <div class="bc-panel">
        <div class="path active">/home/user/</div>
        <div class="file-head"><span>${t('mockName')}</span><span>${t('mockExt')}</span><span>${t('mockSize')}</span><span>${t('mockDate')}</span></div>
        <div class="file-list">${rows(R,8)}</div>
      </div>
    </div>
    <div class="bc-footer-info"><span>0 / 3 ${t('mockFiles')}, 0 / 5 ${t('mockFolders')}, 0 ${t('mockBytes')} / 3.6 KB</span><span>0 / 4 ${t('mockFiles')}, 0 / 5 ${t('mockFolders')}, 0 ${t('mockBytes')} / 16.6 MB</span></div>
    <div class="bc-keys"><div>${t('mockF3View')}</div><div>${t('mockF4Edit')}</div><div>${t('mockF5Copy')}</div><div>${t('mockF6Move')}</div><div>${t('mockF7NewFolder')}</div><div>${t('mockF8Delete')}</div><div>${t('mockExit')}</div></div>
  </div>`
}
function render(){document.documentElement.lang=lang;if(document.body?.dataset.titleI18n)document.title=t(document.body.dataset.titleI18n);document.querySelectorAll('[data-i18n-title]').forEach(e=>e.title=t(e.dataset.i18nTitle));document.querySelectorAll('[data-i18n-alt]').forEach(e=>e.alt=t(e.dataset.i18nAlt));document.querySelectorAll('[data-i18n-aria-label]').forEach(e=>e.setAttribute('aria-label',t(e.dataset.i18nAriaLabel)));document.querySelectorAll('[data-i18n]').forEach(e=>{const k=e.dataset.i18n;const v=I[lang]?.[k]??I.en?.[k];if(v!==undefined)e.textContent=v});document.querySelectorAll('[data-lang-label]').forEach(e=>e.textContent=t('lang')+' ▾');document.querySelectorAll('[data-beta]').forEach(e=>e.href=betaUrl);document.querySelectorAll('[data-support-email]').forEach(e=>e.href=`mailto:${supportEmail()}?subject=Beyond%20Commander%20support`);document.querySelectorAll('[data-contact-email]').forEach(e=>e.textContent=supportEmail());document.querySelectorAll('[data-contact-email-link]').forEach(e=>{e.textContent=supportEmail();e.href=`mailto:${supportEmail()}?subject=Beyond%20Commander`});document.querySelectorAll('[data-mock]').forEach(e=>{let v=e.dataset.mock;e.innerHTML=v==='deck'?`<div class="hero-shot-wrap"><div class="hero-shot" role="img" aria-label="Beyond Commander themed preview"></div><div class="hero-shot-overlay">${t('heroStatus')}</div></div>`:`<div class="bc-card ${v||'light'}">${mock()}</div>`})}
document.addEventListener('click',e=>{if(e.target.matches('[data-lang-label]'))e.target.nextElementSibling.classList.toggle('open');else if(!e.target.closest('.lang'))closeLang()});document.addEventListener('DOMContentLoaded',render);
