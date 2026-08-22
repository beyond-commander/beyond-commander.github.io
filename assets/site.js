const betaUrl='https://github.com/beyond-commander/beyondcmd/wiki/Beta-Testers';
const supportEmailCodes=[98,101,121,111,110,100,99,109,100,50,48,48,54,64,103,109,97,105,108,46,99,111,109];
function supportEmail(){return String.fromCharCode(...supportEmailCodes)}
const I={
en:{home:'Home',features:'Features',plugins:'Plugins',license:'License',support:'Contact',about:'About',tagline:'Beyond file management',lang:'English',eyebrow:'Next-generation, multi-platform file manager',hero2:'Much more than a Total Commander alternative!',heroCopy:'A modern, fast and productive dual-pane file manager with advanced operations, extensibility, WCL modules, automation and a platform-first architecture. Linux is available first; Windows, macOS and Android are coming.',beta:'Beta tester: Sign up',order:'License: Order',free:'Free download!',freeSub:'Beta builds are distributed through the beta program.',priceFrom:'License: 25 EUR + VAT',priceSub:'One user license, simple pricing.',platforms:'Platforms',platformsFancy:'Multi-platform support',windows:'Windows',macos:'macOS',linuxShort:'Linux',android:'Android',active:'Active',coming:'Coming!',soon:'Coming soon! Sign up as a beta tester!',linux:'Linux — active',pluginWidgetTitle:'Plugins & WCL modules',pluginWidgetCopy:'Extend Beyond Commander with additional community plugin functionality.',pluginWidgetButton:'Download plugins',featuresTitle:'Features',featuresLead:'The familiar Commander workflow, extended with modern tools and Linux/KDE integration.',basics:'Core functions',extras:'Highlighted extras',pluginsTitle:'Plugins',pluginsLead:'Compatibility refers to the plugin binary/API itself, not to whether a Beyond Commander build for that platform has already been released.',family:'Plugin family',purpose:'Purpose',source:'Catalogue / source',wcx:'Packer / archive plugins',wfx:'File-system plugins',wlx:'Lister / viewer plugins',wdx:'Content / metadata plugins',native:'Native ABI',bridge:'PE/Wine bridge needed',port:'Port/build dependent',pluginsNote:'Native plugins compiled for the host platform can be loaded directly. Windows PE Total Commander plugins on Linux require the PE/Wine bridge and must not be presented as native Linux plugins.',installers:'Installers are coming',installersD:'Planned for all major platforms. Linux packages: AppImage, DEB and RPM. Planned distribution coverage includes Ubuntu, Debian, Linux Mint, Fedora, openSUSE, blackPanther OS and other compatible distributions.',licenseTitle:'License & pricing',licenseLead:'One simple user-based price, following the practical licensing principles used by Total Commander.',uniform:'Uniform price',vat:' + VAT / user',trial:'30-day trial',trialD:'Use the complete trial for 30 days. After the trial, purchase a license or remove the software.',userLic:'One license belongs to one user',userLicD:'The license is assigned to a person rather than one computer.',multiPC:'Multiple computers for the same user',multiPCD:'The licensed user may use Beyond Commander on multiple personal/work computers.',concurrent:'Business licensing by concurrent users',concurrentD:'Organizations need approximately as many user licenses as the maximum number of people using the software at the same time.',updates:'Updates included',updatesD:'Registered users receive product updates under the published license terms.',buy:'Order license',tcRef:'Licensing model reference: Total Commander ordering/FAQ',supportTitle:'Support',supportLead:'Licensed users can request product support and receive updates, fixes and documentation.',s1:'Product support',s1d:'Help with installation, configuration and normal product use.',s2:'Updates & bug fixes',s2d:'Ongoing versions with stability, compatibility and security fixes.',s3:'Documentation & FAQ',s3d:'Guides, troubleshooting information and practical usage notes.',s4:'Issue reporting',s4d:'Report reproducible bugs and contribute feedback.',emailSupport:'Contact support by email',betaJoin:'Join the beta program',betaJoinD:'Help test Beyond Commander before public releases.'},
hu:{home:'Főoldal',features:'Funkciók',plugins:'Bővítmények',license:'Licenc',support:'Kapcsolat',about:'Névjegy',tagline:'A fájlmenedzseren túl',lang:'Magyar',eyebrow:'Új generációs, többplatformos fájlkezelő',hero2:'Sokkal több, mint egy Total Commander alternatíva!',heroCopy:'Modern, gyors és hatékony kétpaneles fájlkezelő fejlett műveletekkel, bővíthetőséggel, WCL modulokkal, automatizálással és többplatformos architektúrával. Elsőként Linuxon érhető el; a Windows, macOS és Android változat érkezik.',beta:'Beta teszter: Feliratkozás',order:'Licenc: Megrendelés',free:'Ingyenes letöltés!',freeSub:'A beta kiadások a beta programon keresztül érhetők el.',priceFrom:'Licenc: 25 EUR + ÁFA',priceSub:'Egy felhasználói licenc, egyszerű árazás.',platforms:'Platformok',platformsFancy:'Többplatformos támogatás',windows:'Windows',macos:'macOS',linuxShort:'Linux',android:'Android',active:'Aktív',coming:'Jön!',soon:'Hamarosan! Jelentkezz beta teszternek!',linux:'Linux — aktív',pluginWidgetTitle:'Pluginok és WCL modulok',pluginWidgetCopy:'Bővítse Beyond Commanderét további funkciókkal a közösségi pluginok segítségével!',pluginWidgetButton:'Pluginok letöltése',featuresTitle:'Funkciók',featuresLead:'Ismerős Commander munkafolyamat modern eszközökkel és Linux/KDE integrációval.',basics:'Alapvető funkciók',extras:'Kiemelt extrák',pluginsTitle:'Bővítmények',pluginsLead:'A kompatibilitás a plugin binárisára/API-jára vonatkozik, nem arra, hogy az adott platformra megjelent-e már a Beyond Commander.',family:'Bővítménycsalád',purpose:'Feladat',source:'Katalógus / forrás',wcx:'Tömörítő / archívum pluginok',wfx:'Fájlrendszer pluginok',wlx:'Lister / néző pluginok',wdx:'Tartalom / metaadat pluginok',native:'Natív ABI',bridge:'PE/Wine bridge szükséges',port:'Port/build függő',pluginsNote:'A fogadó platformra natívan fordított plugin közvetlenül betölthető. A Windows PE Total Commander plugin Linuxon PE/Wine bridge-et igényel, ezért nem natív Linux pluginként kezelendő.',installers:'Telepítők hamarosan',installersD:'Minden fő platformra tervezve. Linuxhoz AppImage, DEB és RPM. Tervezett lefedettség: Ubuntu, Debian, Linux Mint, Fedora, openSUSE, blackPanther OS és más kompatibilis disztribúciók.',licenseTitle:'Licenc és árak',licenseLead:'Egyetlen egyszerű, felhasználóalapú ár, a Total Commander jól érthető licencelési elveinek mintájára.',uniform:'Egységes ár',vat:' + ÁFA / felhasználó',trial:'30 napos kipróbálás',trialD:'A teljes próbaváltozat 30 napig használható. Ezután licencet kell vásárolni vagy a szoftvert el kell távolítani.',userLic:'Egy licenc egy felhasználóhoz tartozik',userLicD:'A licenc személyhez kötődik, nem egyetlen számítógéphez.',multiPC:'Több saját számítógépen használható',multiPCD:'A licencelt felhasználó több saját vagy munkahelyi gépén használhatja.',concurrent:'Céges licenc az egyidejű felhasználók alapján',concurrentD:'A szükséges licencek száma az egyidejűleg használó személyek várható maximumához igazodik.',updates:'Frissítések járnak',updatesD:'A regisztrált felhasználók a közzétett feltételek szerint termékfrissítéseket kapnak.',buy:'Licenc megrendelése',tcRef:'Licencmodell referencia: Total Commander rendelés/FAQ',supportTitle:'Támogatás',supportLead:'A licencelt felhasználók terméktámogatást kérhetnek, valamint frissítéseket, hibajavításokat és dokumentációt kapnak.',s1:'Terméktámogatás',s1d:'Segítség telepítéshez, konfigurációhoz és a program használatához.',s2:'Frissítések és hibajavítások',s2d:'Új verziók stabilitási, kompatibilitási és biztonsági javításokkal.',s3:'Dokumentáció és GYIK',s3d:'Útmutatók, hibaelhárítás és gyakorlati tippek.',s4:'Hibajelentés',s4d:'Reprodukálható hibák és fejlesztési visszajelzések beküldése.',emailSupport:'Kapcsolatfelvétel e-mailben',betaJoin:'Csatlakozás a beta programhoz',betaJoinD:'Segíts a Beyond Commander tesztelésében a publikus kiadás előtt.'},
de:{home:'Start',features:'Funktionen',plugins:'Plugins',license:'Lizenz',support:'Kontakt',about:'Über Uns',tagline:'Mehr als Dateiverwaltung',lang:'Deutsch',eyebrow:'Dateimanager der nächsten Generation für mehrere Plattformen',hero2:'Viel mehr als nur eine Total-Commander-Alternative!',heroCopy:'Moderner, schneller Dual-Pane-Dateimanager mit erweiterten Operationen und einer plattformorientierten Architektur. Linux zuerst; Windows, macOS und Android folgen.',beta:'Beta-Tester: Anmelden',order:'Lizenz: Bestellen',free:'Kostenloser Download!',freeSub:'Beta-Builds werden über das Beta-Programm verteilt.',priceFrom:'Lizenz: 25 EUR + MwSt.',priceSub:'Eine Benutzerlizenz, einfache Preisgestaltung.',platforms:'Plattformen',coming:'Kommt!',soon:'Demnächst! Als Beta-Tester anmelden!',linux:'Linux — aktiv',featuresTitle:'Funktionen',featuresLead:'Vertrauter Commander-Workflow mit modernen Werkzeugen und Linux/KDE-Integration.',basics:'Grundfunktionen',extras:'Besondere Extras',pluginsTitle:'Plugins',pluginsLead:'Kompatibilität beschreibt das Plugin-Binärformat/API, unabhängig von der aktuellen BC-Verfügbarkeit.',family:'Plugin-Familie',purpose:'Zweck',source:'Katalog / Quelle',wcx:'Packer-/Archiv-Plugins',wfx:'Dateisystem-Plugins',wlx:'Lister-/Viewer-Plugins',wdx:'Inhalts-/Metadaten-Plugins',native:'Native ABI',bridge:'PE/Wine-Bridge nötig',port:'Port/Build-abhängig',pluginsNote:'Native Plugins können direkt geladen werden. Windows-PE-Plugins benötigen unter Linux eine PE/Wine-Bridge.',installers:'Installer kommen',installersD:'Für alle Hauptplattformen geplant. Linux: AppImage, DEB und RPM.',licenseTitle:'Lizenz & Preise',licenseLead:'Ein einfacher benutzerbasierter Preis nach dem verständlichen Lizenzprinzip von Total Commander.',uniform:'Einheitlicher Preis',vat:' + MwSt. / Benutzer',trial:'30-Tage-Test',trialD:'30 Tage testen, danach Lizenz kaufen oder Software entfernen.',userLic:'Eine Lizenz pro Benutzer',userLicD:'Die Lizenz gehört einer Person, nicht einem einzelnen PC.',multiPC:'Mehrere Computer desselben Benutzers',multiPCD:'Nutzung auf mehreren eigenen Arbeits-/Privatrechnern.',concurrent:'Firmenlizenz nach gleichzeitigen Benutzern',concurrentD:'Die Anzahl richtet sich nach der maximalen gleichzeitigen Nutzung.',updates:'Updates inklusive',updatesD:'Registrierte Benutzer erhalten Updates gemäß den veröffentlichten Bedingungen.',buy:'Lizenz bestellen',tcRef:'Lizenzmodell-Referenz: Total Commander Bestellung/FAQ',supportTitle:'Support',supportLead:'Lizenzierte Benutzer erhalten Produktsupport, Updates, Fehlerbehebungen und Dokumentation.',s1:'Produktsupport',s1d:'Hilfe bei Installation, Konfiguration und Nutzung.',s2:'Updates & Fehlerbehebungen',s2d:'Regelmäßige Versionen mit Stabilitäts- und Sicherheitskorrekturen.',s3:'Dokumentation & FAQ',s3d:'Anleitungen und Fehlerbehebung.',s4:'Fehler melden',s4d:'Reproduzierbare Fehler und Feedback melden.',emailSupport:'Support per E-Mail',betaJoin:'Beta-Programm',betaJoinD:'Beyond Commander vor der Veröffentlichung testen.'}}

Object.assign(I.en,{
  extensibility:'Extensible',
  extensibilityD:'WCX/WFX/WLX/WDX compatibility layers, WCL modules and native integrations.',
  modern:'Advanced operations',
  modernD:'Fast copy/move, search, synchronization, views, gallery, checksums and more.',
  multiplat:'Multi-platform roadmap',
  multiplatD:'Linux first; Windows, macOS and Android editions are planned.',
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
  multiplat:'Többplatformos fejlesztés',
  multiplatD:'Elsőként Linux; a Windows, macOS és Android kiadások tervezés alatt állnak.',
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
  multiplat:'Multi-Plattform-Roadmap',
  multiplatD:'Linux zuerst; Ausgaben für Windows, macOS und Android sind geplant.',
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

let lang=localStorage.getItem('bc-lang')||'en'; function t(k){return I[lang]?.[k]||I.en[k]||k} function setLang(x){lang=I[x]?x:'en';localStorage.setItem('bc-lang',lang);render();closeLang()} function closeLang(){document.querySelector('.lang-menu')?.classList.remove('open')}
function nav(active){return `<header class="site-header"><div class="wrap navbar"><a class="brand" href="index.html"><img class="brand-logo" src="assets/bc2.svg" alt="Beyond Commander"><span><strong>BEYOND COMMANDER</strong><small data-i18n="tagline"></small></span></a><nav class="navlinks"><a href="index.html" class="${active==='home'?'active':''}" data-i18n="home"></a><a href="features.html" class="${active==='features'?'active':''}" data-i18n="features"></a><a href="plugins.html" class="${active==='plugins'?'active':''}" data-i18n="plugins"></a><a href="license.html" class="${active==='license'?'active':''}" data-i18n="license"></a><a href="support.html" class="${active==='support'?'active':''}" data-i18n="support"></a><a href="about.html" class="${active==='about'?'active':''}" data-i18n="about"></a></nav><div class="lang"><button data-lang-label></button><div class="lang-menu"><button onclick="setLang('en')">English</button><button onclick="setLang('hu')">Magyar</button><button onclick="setLang('de')">Deutsch</button></div></div></div></header>`}
function footer(){return `<footer class="footer"><div class="wrap"><strong>Beyond Commander</strong><div>File management beyond the classic Commander model.</div></div></footer>`}
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
function rows(a, selectedIndex){
  return a.map((r,i)=>`<div class="file-row${i===selectedIndex?' selected':''}">
    <span>${r[0]}</span><span>${r[1]}</span><span>${r[2]}</span><span>${r[3]}</span>
  </div>`).join('')
}
function mock(){
  return `<div class="bc-window">
    <div class="bc-titlebar">
      <div class="bc-title">Beyond Commander — Prototype 0.6.13 - UNREGISTERED</div>
      <div class="bc-win-actions"><span class="violet"></span><span class="green"></span><span class="pink"></span></div>
    </div>
    <div class="bc-menu"><span>File</span><span>Mark</span><span>Commands</span><span>Network</span><span>View</span><span>Configuration</span><span>Start</span><span>Help</span></div>
    <div class="bc-toolbar">
      <span class="tool cyan">↻</span><span class="sep"></span>
      <span class="tool amber">↥</span><span class="tool amber">🖼</span><span class="sep"></span>
      <span class="tool blue">↶</span><span class="tool blue">↷</span><span class="tool blue">⬆</span><span class="tool blue">⬇</span><span class="sep"></span>
      <span class="tool orange">📦</span><span class="tool orange">📥</span><span class="tool red">FTP</span><span class="tool green">URL</span><span class="sep"></span>
      <span class="tool cyan">⌕</span><span class="tool gray">▥</span><span class="tool green">⟳</span><span class="sep"></span>
      <span class="tool sand">☷</span>
    </div>
    <div class="bc-barline">
      <span class="drivebox"><b>[C:]</b> 118.2 GB / 237.9 GB free</span>
      <span class="drivebox"><b>[LINUX]</b> 52.4 GB / 105.2 GB free</span>
    </div>
    <div class="bc-panelshell">
      <div class="bc-panel">
        <div class="path">C:\\Users\\User\\Documents</div>
        <div class="file-head"><span>Name</span><span>Ext</span><span>Size</span><span>Date</span></div>
        <div class="file-list">${rows(L,-1)}</div>
      </div>
      <div class="bc-panel">
        <div class="path active">/home/user/</div>
        <div class="file-head"><span>Name</span><span>Ext</span><span>Size</span><span>Date</span></div>
        <div class="file-list">${rows(R,8)}</div>
      </div>
    </div>
    <div class="soon-overlay">Coming soon! Sign up as a beta tester!</div>
    <div class="bc-footer-info"><span>0 / 3 files, 0 / 5 folders, 0 bytes / 3.6 KB</span><span>0 / 4 files, 0 / 5 folders, 0 bytes / 16.6 MB</span></div>
    <div class="bc-keys"><div>F3 View</div><div>F4 Edit</div><div>F5 Copy</div><div>F6 Move</div><div>F7 New folder</div><div>F8 Delete</div><div>Alt+F4 Exit</div></div>
  </div>`
}
function render(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));document.querySelectorAll('[data-lang-label]').forEach(e=>e.textContent=t('lang')+' ▾');document.querySelectorAll('[data-beta]').forEach(e=>e.href=betaUrl);document.querySelectorAll('[data-support-email]').forEach(e=>e.href=`mailto:${supportEmail()}?subject=Beyond%20Commander%20support`);document.querySelectorAll('[data-contact-email]').forEach(e=>e.textContent=supportEmail());document.querySelectorAll('[data-contact-email-link]').forEach(e=>{e.textContent=supportEmail();e.href=`mailto:${supportEmail()}?subject=Beyond%20Commander`});document.querySelectorAll('[data-mock]').forEach(e=>{let v=e.dataset.mock;e.innerHTML=v==='deck'?`<div class="hero-shot-wrap"><div class="hero-shot" role="img" aria-label="Beyond Commander themed preview"></div><div class="hero-shot-overlay">${t('soon')}</div></div>`:`<div class="bc-card ${v||'light'}">${mock()}</div>`})}
document.addEventListener('click',e=>{if(e.target.matches('[data-lang-label]'))e.target.nextElementSibling.classList.toggle('open');else if(!e.target.closest('.lang'))closeLang()});document.addEventListener('DOMContentLoaded',render);
