(function () {
  /** Canonical App Store product URL (locale-agnostic). */
  const APP_STORE_URL = "https://apps.apple.com/app/dicetales/id6478500774";

  const dict = {
    en: {
      nav: { home: "Home", privacy: "Privacy", contact: "Contact" },
      hero_title: "DiceTales — AI stories from every roll.",
      hero_sub:
        "Roll themed story dice, then listen as a unique fantasy tale is woven from your results—with natural AI narration and multiple voices.",
      marketing_title: "Why DiceTales?",
      marketing_p1:
        "Every roll is a new prompt: characters, places, and twists combine into a story that did not exist a minute ago.",
      marketing_p2:
        "Choose from themed dice packs, pick a voice, and save favorites to your library—on iPhone and iPad.",
      marketing_p3:
        "Built for listeners who want campfire tales without the blank page—just dice, imagination, and a little AI magic.",
      features_title: "Highlights",
      f1: "AI-generated stories from your dice results",
      f2: "Natural narration with multiple TTS voices",
      f3: "Themed dice packs—fantasy, epic clashes, cute tales, and more",
      f4: "Personal story library with replay anytime",
      f5: "In-app store for extra packs and voices (StoreKit)",
      f6: "Designed for iPhone and iPad",
      contact_title: "Contact",
      contact_desc: "Questions or feedback? We would love to hear from you.",
      contact_email_label: "Email",
      contact_tip: "Include your app version and a short description of the issue.",
      privacy_title: "Privacy",
      privacy_p1:
        "DiceTales does not collect personal information about you. Payments for in-app content are processed through the Apple App Store.",
      privacy_p2:
        "Stories and audio are generated using AI services via our backend; only what is needed to create your requested content is processed. We do not sell your personal information.",
      privacy_p3:
        "For full details, see the privacy information in the app and on the App Store. We take reasonable steps to protect data handled in line with this policy.",
      footer_rights: "All rights reserved.",
    },
    de: {
      nav: { home: "Start", privacy: "Datenschutz", contact: "Kontakt" },
      hero_title: "DiceTales — KI-Geschichten bei jedem Wurf.",
      hero_sub:
        "Würfle mit thematischen Story-Würfeln und höre zu, wie sich aus deinen Ergebnissen eine einzigartige Fantasy-Erählung entwickelt—mit natürlicher KI-Sprachausgabe und mehreren Stimmen.",
      marketing_title: "Warum DiceTales?",
      marketing_p1:
        "Jeder Wurf ist ein neuer Impuls: Figuren, Orte und Wendungen werden zu einer Geschichte, die vor einer Minute noch nicht existierte.",
      marketing_p2:
        "Wähle thematische Würfelsets, eine Stimme und speichere Favoriten in deiner Bibliothek—auf iPhone und iPad.",
      marketing_p3:
        "Für alle, die Lagerfeuer-Geschichten mögen—ohne leere Seite. Nur Würfel, Fantasie und ein bisschen KI-Magie.",
      features_title: "Highlights",
      f1: "KI-generierte Geschichten aus deinen Würfelergebnissen",
      f2: "Natürliche Vorlesestimmen mit mehreren TTS-Stimmen",
      f3: "Themen-Würfelsets—Fantasy, epische Konflikte, süße Märchen und mehr",
      f4: "Persönliche Geschichtenbibliothek mit Wiedergabe jederzeit",
      f5: "In-App-Store für zusätzliche Sets und Stimmen (StoreKit)",
      f6: "Für iPhone und iPad entwickelt",
      contact_title: "Kontakt",
      contact_desc: "Fragen oder Feedback? Wir freuen uns von dir zu hören.",
      contact_email_label: "E-Mail",
      contact_tip: "Bitte App-Version und eine kurze Problembeschreibung angeben.",
      privacy_title: "Datenschutz",
      privacy_p1:
        "DiceTales erhebt keine personenbezogenen Daten über dich. Zahlungen für In-App-Inhalte laufen über den Apple App Store.",
      privacy_p2:
        "Geschichten und Audio werden über unser Backend mit KI-Diensten erzeugt; verarbeitet wird nur das, was zur Erstellung deiner angeforderten Inhalte nötig ist. Wir verkaufen keine personenbezogenen Daten.",
      privacy_p3:
        "Einzelheiten findest du in den Datenschutzangaben in der App und im App Store. Wir treffen angemessene Schutzmaßnahmen für Daten im Rahmen dieser Richtlinie.",
      footer_rights: "Alle Rechte vorbehalten.",
    },
    fr: {
      nav: { home: "Accueil", privacy: "Confidentialité", contact: "Contact" },
      hero_title: "DiceTales — Des histoires IA à chaque lancer.",
      hero_sub:
        "Lancez des dés thématiques, puis écoutez un récit fantastique unique tissé à partir de vos résultats—avec narration IA naturelle et plusieurs voix.",
      marketing_title: "Pourquoi DiceTales ?",
      marketing_p1:
        "Chaque lancer est une nouvelle impulsion : personnages, lieux et rebondissements forment une histoire qui n’existait pas une minute plus tôt.",
      marketing_p2:
        "Choisissez des packs de dés, une voix et enregistrez vos favoris dans votre bibliothèque—sur iPhone et iPad.",
      marketing_p3:
        "Pour ceux qui aiment les contes au coin du feu—sans page blanche. Dés, imagination et une touche de magie IA.",
      features_title: "Points forts",
      f1: "Histoires générées par IA à partir de vos dés",
      f2: "Narration naturelle avec plusieurs voix TTS",
      f3: "Packs thématiques—fantasy, affrontements épiques, contes mignons et plus",
      f4: "Bibliothèque personnelle avec réécoute à tout moment",
      f5: "Boutique in-app pour packs et voix supplémentaires (StoreKit)",
      f6: "Conçu pour iPhone et iPad",
      contact_title: "Contact",
      contact_desc: "Questions ou retours ? Écrivez-nous.",
      contact_email_label: "E-mail",
      contact_tip: "Indiquez la version de l’app et une courte description du problème.",
      privacy_title: "Confidentialité",
      privacy_p1:
        "DiceTales ne collecte pas d’informations personnelles sur vous. Les paiements in-app passent par l’Apple App Store.",
      privacy_p2:
        "Les histoires et l’audio sont générés via notre infrastructure avec des services d’IA ; seuls les éléments nécessaires à votre demande sont traités. Nous ne vendons pas vos données personnelles.",
      privacy_p3:
        "Pour les détails complets, voir l’app et la fiche App Store. Nous protégeons les données traitées conformément à cette politique.",
      footer_rights: "Tous droits réservés.",
    },
    it: {
      nav: { home: "Home", privacy: "Privacy", contact: "Contatto" },
      hero_title: "DiceTales — Storie IA a ogni lancio.",
      hero_sub:
        "Lancia dadi tematici e ascolta mentre un racconto fantasy unico si intreccia dai tuoi risultati—con narrazione IA naturale e più voci.",
      marketing_title: "Perché DiceTales?",
      marketing_p1:
        "Ogni lancio è un nuovo spunto: personaggi, luoghi e colpi di scena diventano una storia che un minuto prima non esisteva.",
      marketing_p2:
        "Scegli pacchetti di dadi, una voce e salva i preferiti nella libreria—su iPhone e iPad.",
      marketing_p3:
        "Per chi ama i racconti al fuoco—senza pagina bianca. Solo dadi, immaginazione e un po’ di magia IA.",
      features_title: "In evidenza",
      f1: "Storie generate dall’IA dai risultati dei dadi",
      f2: "Narrazione naturale con più voci TTS",
      f3: "Pacchetti tematici—fantasy, scontri epici, fiabe dolci e altro",
      f4: "Libreria personale con riascolto in qualsiasi momento",
      f5: "Store in-app per pacchetti e voci extra (StoreKit)",
      f6: "Progettato per iPhone e iPad",
      contact_title: "Contatto",
      contact_desc: "Domande o feedback? Scrivici.",
      contact_email_label: "E-mail",
      contact_tip: "Includi la versione dell’app e una breve descrizione del problema.",
      privacy_title: "Privacy",
      privacy_p1:
        "DiceTales non raccoglie informazioni personali su di te. I pagamenti in-app passano dall’Apple App Store.",
      privacy_p2:
        "Storie e audio sono generati tramite il nostro backend con servizi IA; vengono elaborati solo i dati necessari alla tua richiesta. Non vendiamo i tuoi dati personali.",
      privacy_p3:
        "Per i dettagli completi vedi l’app e l’App Store. Adottiamo misure ragionevoli per proteggere i dati trattati secondo questa informativa.",
      footer_rights: "Tutti i diritti riservati.",
    },
    es: {
      nav: { home: "Inicio", privacy: "Privacidad", contact: "Contacto" },
      hero_title: "DiceTales — Historias con IA en cada tirada.",
      hero_sub:
        "Tira dados temáticos y escucha cómo se teje un relato de fantasía único a partir de tus resultados—con narración natural por IA y varias voces.",
      marketing_title: "¿Por qué DiceTales?",
      marketing_p1:
        "Cada tirada es un nuevo impulso: personajes, lugares y giros se combinan en una historia que no existía hace un minuto.",
      marketing_p2:
        "Elige packs de dados, una voz y guarda favoritos en tu biblioteca—en iPhone y iPad.",
      marketing_p3:
        "Para quienes quieren cuentos al fuego—sin página en blanco. Dados, imaginación y un poco de magia IA.",
      features_title: "Destacados",
      f1: "Historias generadas por IA según tus dados",
      f2: "Narración natural con varias voces TTS",
      f3: "Packs temáticos—fantasía, batallas épicas, cuentos tiernos y más",
      f4: "Biblioteca personal con repetición cuando quieras",
      f5: "Tienda in-app para packs y voces extra (StoreKit)",
      f6: "Diseñado para iPhone y iPad",
      contact_title: "Contacto",
      contact_desc: "¿Preguntas o comentarios? Escríbenos.",
      contact_email_label: "Correo",
      contact_tip: "Incluye la versión de la app y una breve descripción del problema.",
      privacy_title: "Privacidad",
      privacy_p1:
        "DiceTales no recopila información personal sobre ti. Los pagos in-app se procesan en la Apple App Store.",
      privacy_p2:
        "Las historias y el audio se generan con IA a través de nuestro backend; solo se procesa lo necesario para tu solicitud. No vendemos tu información personal.",
      privacy_p3:
        "Para todos los detalles, consulta la app y la App Store. Aplicamos medidas razonables para proteger los datos según esta política.",
      footer_rights: "Todos los derechos reservados.",
    },
    ja: {
      nav: { home: "ホーム", privacy: "プライバシー", contact: "お問い合わせ" },
      hero_title: "DiceTales — 出目から生まれるAIストーリー。",
      hero_sub:
        "テーマ別のストーリーダイスを振り、結果から紡がれる唯一無二のファンタジーを聴く—自然なAIナレーションと複数の声で。",
      marketing_title: "DiceTalesとは？",
      marketing_p1: "1回の出目が新しいきっかけ。キャラクター、場所、どんでん返しが、さきほどまで存在しなかった物語になります。",
      marketing_p2: "テーマパックと声を選び、お気に入りをライブラリに保存—iPhoneとiPadで。",
      marketing_p3: "真っ白な原稿なしで焚き火の語りを。サイコロと想像力、そして少しのAIの魔法を。",
      features_title: "ハイライト",
      f1: "出目からAIが物語を生成",
      f2: "複数のTTS音声で自然な朗読",
      f3: "テーマ別ダイスパック—ファンタジー、壮大な対決、キュートな物語など",
      f4: "いつでも再生できるマイライブラリ",
      f5: "追加パックと音声のApp内課金（StoreKit）",
      f6: "iPhoneとiPad向けに設計",
      contact_title: "お問い合わせ",
      contact_desc: "ご質問やフィードバックはお気軽に。",
      contact_email_label: "メール",
      contact_tip: "アプリのバージョンと簡単な状況説明を書いてください。",
      privacy_title: "プライバシー",
      privacy_p1:
        "DiceTalesはあなたの個人情報を収集しません。App内課金の支払いはApple App Store経由です。",
      privacy_p2:
        "物語と音声はバックエンド経由のAIサービスで生成されます。リクエストに必要な範囲のみ処理し、個人情報を販売することはありません。",
      privacy_p3:
        "詳細はアプリ内およびApp Storeのプライバシー情報をご確認ください。本ポリシーに沿ってデータを保護するよう合理的な措置を講じます。",
      footer_rights: "全著作権所有。",
    },
    nl: {
      nav: { home: "Home", privacy: "Privacy", contact: "Contact" },
      hero_title: "DiceTales — AI-verhalen bij elke worp.",
      hero_sub:
        "Gooi thematische dobbelstenen en luister naar een uniek fantasyverhaal uit jouw resultaten—met natuurlijke AI-nasynchronisatie en meerdere stemmen.",
      marketing_title: "Waarom DiceTales?",
      marketing_p1:
        "Elke worp is een nieuw startpunt: personages, plekken en wendingen worden een verhaal dat een minuut geleden nog niet bestond.",
      marketing_p2:
        "Kies themapakketten, een stem en bewaar favorieten in je bibliotheek—op iPhone en iPad.",
      marketing_p3:
        "Voor wie verhalen bij het vuur wil—zonder wit vel. Dobbelstenen, verbeelding en een beetje AI-magie.",
      features_title: "Hoogtepunten",
      f1: "AI-verhalen op basis van je dobbelresultaten",
      f2: "Natuurlijke voorlezing met meerdere TTS-stemmen",
      f3: "Themapakketten—fantasy, epische treffen, schattige sprookjes en meer",
      f4: "Persoonlijke bibliotheek met altijd opnieuw afspelen",
      f5: "In-app winkel voor extra pakketten en stemmen (StoreKit)",
      f6: "Ontworpen voor iPhone en iPad",
      contact_title: "Contact",
      contact_desc: "Vragen of feedback? Laat het weten.",
      contact_email_label: "E-mail",
      contact_tip: "Vermeld je app-versie en een korte omschrijving van het probleem.",
      privacy_title: "Privacy",
      privacy_p1:
        "DiceTales verzamelt geen persoonsgegevens over jou. Betalingen voor in-app inhoud lopen via de Apple App Store.",
      privacy_p2:
        "Verhalen en audio worden via onze backend met AI gemaakt; alleen wat nodig is voor jouw aanvraag wordt verwerkt. We verkopen geen persoonsgegevens.",
      privacy_p3:
        "Zie de app en App Store voor volledige details. We nemen redelijke maatregelen om gegevens te beschermen volgens dit beleid.",
      footer_rights: "Alle rechten voorbehouden.",
    },
    pt: {
      nav: { home: "Início", privacy: "Privacidade", contact: "Contato" },
      hero_title: "DiceTales — Histórias com IA a cada jogada.",
      hero_sub:
        "Role dados temáticos e ouça um conto de fantasia único surgir dos seus resultados—com narração natural por IA e várias vozes.",
      marketing_title: "Por que DiceTales?",
      marketing_p1:
        "Cada jogada é um novo impulso: personagens, lugares e reviravoltas viram uma história que não existia um minuto atrás.",
      marketing_p2:
        "Escolha pacotes de dados, uma voz e salve favoritos na biblioteca—no iPhone e iPad.",
      marketing_p3:
        "Para quem gosta de histórias à luz do fogo—sem folha em branco. Dados, imaginação e um pouco de magia de IA.",
      features_title: "Destaques",
      f1: "Histórias geradas por IA a partir dos seus dados",
      f2: "Narração natural com várias vozes TTS",
      f3: "Pacotes temáticos—fantasia, confrontos épicos, contos fofos e mais",
      f4: "Biblioteca pessoal com replay a qualquer hora",
      f5: "Loja no app para pacotes e vozes extras (StoreKit)",
      f6: "Feito para iPhone e iPad",
      contact_title: "Contato",
      contact_desc: "Dúvidas ou feedback? Fale conosco.",
      contact_email_label: "E-mail",
      contact_tip: "Inclua a versão do app e uma breve descrição do problema.",
      privacy_title: "Privacidade",
      privacy_p1:
        "DiceTales não coleta informações pessoais sobre você. Pagamentos in-app são feitos pela Apple App Store.",
      privacy_p2:
        "Histórios e áudio são gerados por IA via nosso backend; só o necessário para atender ao seu pedido é processado. Não vendemos seus dados pessoais.",
      privacy_p3:
        "Para detalhes completos, veja o app e a App Store. Adotamos medidas razoáveis para proteger dados conforme esta política.",
      footer_rights: "Todos os direitos reservados.",
    },
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const langSelect = $(".lang");
  const yearEl = $("#year");

  function applyAppStoreLinks() {
    $$("a.app-store-badge").forEach((a) => {
      a.href = APP_STORE_URL;
    });
  }

  function setLang(lang) {
    const d = dict[lang] || dict.en;
    $('[data-i="nav.home"]').textContent = d.nav.home;
    $('[data-i="nav.privacy"]').textContent = d.nav.privacy;
    $('[data-i="nav.contact"]').textContent = d.nav.contact;

    $("#hero-title").textContent = d.hero_title;
    $("#hero-sub").textContent = d.hero_sub;

    $("#marketing-title").textContent = d.marketing_title;
    $("#marketing-p1").textContent = d.marketing_p1;
    $("#marketing-p2").textContent = d.marketing_p2;
    $("#marketing-p3").textContent = d.marketing_p3;

    $("#features-title").textContent = d.features_title;
    $("#f1").textContent = d.f1;
    $("#f2").textContent = d.f2;
    $("#f3").textContent = d.f3;
    $("#f4").textContent = d.f4;
    $("#f5").textContent = d.f5;
    $("#f6").textContent = d.f6;

    $("#contact-title").textContent = d.contact_title;
    $("#contact-desc").textContent = d.contact_desc;
    $("#contact-email-label").textContent = d.contact_email_label;
    $("#contact-tip").textContent = d.contact_tip;

    $("#privacy-title").textContent = d.privacy_title;
    $("#privacy-p1").textContent = d.privacy_p1;
    $("#privacy-p2").textContent = d.privacy_p2;
    $("#privacy-p3").textContent = d.privacy_p3;

    $("#rights").textContent = d.footer_rights;

    const badgeLocales = {
      en: "en-us",
      nl: "nl-nl",
      fr: "fr-fr",
      de: "de-de",
      it: "it-it",
      ja: "ja-jp",
      pt: "pt-br",
      es: "es-mx",
    };
    const badgeAlts = {
      en: "Download on the App Store",
      nl: "Download in de App Store",
      fr: "Télécharger dans l'App Store",
      de: "Laden im App Store",
      it: "Scarica su App Store",
      ja: "App Storeからダウンロード",
      pt: "Baixar na App Store",
      es: "Descargar en el App Store",
    };
    const badgeLocale = badgeLocales[lang] || "en-us";
    const badgeUrl = `https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/${badgeLocale}?size=250x83`;
    const badgeAlt = badgeAlts[lang] || badgeAlts.en;
    $$(".app-store-badge img").forEach((img) => {
      img.src = badgeUrl;
      img.alt = badgeAlt;
    });

    applyAppStoreLinks();

    localStorage.setItem("lang", lang);
    langSelect.value = lang;
  }

  function initLang() {
    const saved = localStorage.getItem("lang");
    const supportedLangs = ["en", "nl", "fr", "de", "it", "ja", "pt", "es"];
    let inferred = "en";
    if (navigator.language) {
      const browserLang = navigator.language.split("-")[0];
      if (supportedLangs.includes(browserLang)) {
        inferred = browserLang;
      }
    }
    setLang(saved || inferred);
  }

  const sections = [];
  const navLinks = [];
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      let cur = sections[0]?.id;
      const fromTop = window.scrollY + 120;
      for (const sec of sections) {
        if (sec.offsetTop <= fromTop) cur = sec.id;
      }
      const activeHref = "#" + cur;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === activeHref));
      ticking = false;
    });
  }

  function init() {
    sections.push(...$$("section[id]"));
    navLinks.push(...$$("header nav.nav a"));

    applyAppStoreLinks();
    initLang();
    yearEl.textContent = String(new Date().getFullYear());
    langSelect.addEventListener("change", (e) => setLang(e.target.value));
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
