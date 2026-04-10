# Proje Planı: Minimal Prompt Arşivi (Poyraz Prompts)

Bu plan, Next.js App Router mimarisi ve kendi geliştirdiğin "poyraz-ui" bileşen kütüphanesini kullanarak, tamamen veri odaklı ve minimal bir prompt paylaşım platformu oluşturmak için hazırlanmıştır.

## 1. Mimari ve Kurulum Aşaması
* **Proje Başlatma:** Next.js (App Router) ile boş bir proje oluşturulacak.
* **Bağımlılıklar:** Tailwind CSS yapılandırılacak.
* **poyraz-ui Entegrasyonu:** Projeye özel UI kütüphanen olan poyraz-ui dahil edilecek. Gerekli temel tasarım token'ları (renk paleti, tipografi, spacing) Tailwind config dosyasına işlenecek.
* **Klasör Yapısı:** * `/app` (Sayfalar ve route'lar)
    * `/components` (poyraz-ui bileşenleri ve layout elementleri)
    * `/data` (Promptların tutulacağı statik JSON veya Markdown dosyaları)
    * `/lib` (Yardımcı fonksiyonlar, örn: slug üretici, kopyalama fonksiyonu)

## 2. Veri Yapısı ve Yönetimi (Veritabanı Yok)
* Maliyetsiz ve hızlı olması için veritabanı kullanılmayacak. Tüm veriler projenin içinde bir JSON dosyasında veya Markdown/MDX formatında tutulacak.
* **Kategori/Etkinlik Şeması:** Her etkinliğin bir başlığı, kısa açıklaması, slug'ı (URL için), tarihi ve etiketleri olacak. (Örnek etkinlikler: Ankara Build Club Sprint #2, Generative Media Hackathon, YouTube İçerik Fikirleri vb.)
* **Prompt Şeması:** Her etkinliğin altında bir prompt listesi olacak. Bu listede prompt'un amacı, ana metni ve varsa değişkenleri (köşeli parantez içindeki doldurulabilir alanlar) bulunacak.

## 3. Arayüz (UI/UX) ve poyraz-ui Kullanımı
* **Tasarım Dili:** Bol boşluklu (whitespace), dikkati sadece metne veren, siyah/beyaz veya monokrom ağırlıklı, minimal bir tasarım izlenecek.
* **Kullanılacak poyraz-ui Bileşenleri:**
    * `Card`: Ana sayfadaki etkinlikleri listelemek için.
    * `Badge` / `Tag`: Etkinliklerin konularını (örn: "Yapay Zeka", "Oyun Geliştirme") belirtmek için.
    * `Button`: Minimal, sadece ikon veya kısa metin içeren kopyala butonları için.
    * `Toast` / `Snackbar`: Kullanıcı bir promptu kopyaladığında ekranda belirecek "Kopyalandı!" bildirimi için.
    * `Typography`: Başlıklar ve özellikle prompt metinlerinin okunabilirliği için monospace veya temiz bir sans-serif font bileşeni.

## 4. Geliştirme Adımları
* **Adım 1: Layout ve Temel Gezinme**
    * Header (sadece logo/isim ve belki kişisel portfolyo sitene -poyraz-portal- giden bir ikon) ve çok sade bir Footer tasarlanacak.
* **Adım 2: Ana Sayfa Geliştirimi (`/`)**
    * `/data` klasöründeki etkinlikler okunacak.
    * poyraz-ui Card bileşenleriyle bir grid veya dikey liste halinde ekrana basılacak.
* **Adım 3: Dinamik Alt Sayfalar (`/[slug]`)**
    * Kullanıcı bir etkinliğe tıkladığında o etkinliğin detay sayfasına gidilecek.
    * Sayfanın üstünde etkinliğin adı ve açıklaması yer alacak.
    * Altında o etkinlikte kullanılan promptlar, poyraz-ui bileşenleri kullanılarak okunaklı bloklar halinde listelenecek.
* **Adım 4: Etkileşim (Kopyalama İşlevi)**
    * Her prompt bloğunun sağ üst veya alt köşesine bir kopyala butonu eklenecek.
    * Panoya kopyalama (Clipboard API) fonksiyonu yazılacak ve tıklandığında Toast bildirimi tetiklenecek.
* **Adım 5: SEO ve Meta Veriler**
    * Daha önce hazırlanan dinamik meta data yapısı sayfalara entegre edilecek.

## 5. Test ve Yayına Alma
* Mobil görünüm (responsive design) test edilecek (özellikle uzun prompt metinlerinin mobilde ekrandan taşmaması ve kopyala butonunun parmakla kolay tıklanabilir olması kontrol edilecek).
* Kopyalama işleminin farklı tarayıcılarda sorunsuz çalıştığı teyit edilecek.
* Proje GitHub'a `poyraz-prompts` (veya seçilen isimle) yüklenecek ve Vercel üzerinden ücretsiz & hızlı bir şekilde canlıya alınacak.