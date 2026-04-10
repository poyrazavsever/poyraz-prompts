# Poyraz Prompts: Minimal Prompt Arşivi

Poyraz Prompts, Next.js mimarisi ve poyraz-ui bileşen kütüphanesi kullanılarak geliştirilmiş, minimal ve veri odaklı bir yapay zeka prompt arşivleme platformudur. Bu proje, çeşitli etkinliklerde, sprintlerde veya günlük kullanımda geliştirilen özel promptların düzenli bir şekilde saklanmasını, kategorize edilmesini ve kolayca paylaşılmasını sağlar.

## Proje Vizyonu

Projenin temel amacı, karmaşadan uzak, sadece içeriğe odaklanan bir kullanıcı deneyimi sunmaktır. Boş alanların (whitespace) cömertçe kullanıldığı, monokrom renk paletinin tercih edildiği ve tipografinin ön planda tutulduğu bir tasarım dili benimsenmiştir.

## Temel Özellikler

- Veri Odaklı Yapı: Herhangi bir veritabanı kurulumuna ihtiyaç duymadan, projenin içindeki statik veriler üzerinden çalışır.
- Dinamik Kategori Sayfaları: Her etkinlik veya konu başlığı için otomatik olarak oluşturulan özel detay sayfaları.
- Akıllı Arama ve Filtreleme: Ana sayfa üzerinden başlık, açıklama veya etiketlere göre anlık arama yapabilme imkanı.
- Tek Tıkla Kopyalama: Prompt metinlerini panoya kopyalayan ve kullanıcıya anlık bildirim (toast) veren etkileşimli arayüz.
- SEO Optimizasyonu: Her sayfa için dinamik meta veriler ve arama motoru dostu URL yapısı.
- Duyarlı Tasarım: Mobil, tablet ve masaüstü cihazlarla tam uyumlu, akıcı arayüz.

## Teknik Yığın

Proje, modern web teknolojilerinin en güncel sürümleriyle inşa edilmiştir:

- Framework: Next.js 16 (App Router)
- Kütüphane: React 19
- Stil: Tailwind CSS 4
- UI Bileşenleri: poyraz-ui (Özel bileşen kütüphanesi)
- İkonlar: Lucide React
- Bildirimler: Sonner
- Tipografi: Geist ve Geist Mono font aileleri

## Proje Yapısı

```bash
poyraz-prompts/
├── app/                  # Next.js App Router (Sayfalar ve Layout)
│   ├── [slug]/           # Dinamik kategori detay sayfası
│   ├── page.tsx          # Ana sayfa (Kategori listesi ve arama)
│   └── layout.tsx        # Global layout ve navbar sarmalayıcı
├── components/           # Projeye özel arayüz bileşenleri
├── data/                 # Prompt verilerinin tutulduğu JSON dosyaları
│   └── prompts.json      # Ana veri kaynağı
├── docs/                 # Proje planı ve dokümantasyon
├── public/               # Statik varlıklar (Logolar, ikonlar)
└── package.json          # Bağımlılıklar ve scriptler
```

## Veri Formatı

Promptlar `data/prompts.json` dosyası içinde aşağıdaki şemaya uygun olarak saklanır:

```json
{
  "slug": "kategori-basligi",
  "title": "Kategori Başlığı",
  "description": "Kategori hakkında kısa açıklama metni.",
  "tags": ["Etiket1", "Etiket2"],
  "date": "YYYY-MM-DD",
  "prompts": [
    {
      "id": "1",
      "title": "Prompt Başlığı",
      "text": "Gerçek prompt içeriği buraya gelir.",
      "description": "Bu promptun ne işe yaradığına dair açıklama."
    }
  ]
}
```

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/poyraz-prompts.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd poyraz-prompts
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   pnpm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   pnpm dev
   ```

5. Tarayıcınızda `http://localhost:3000` adresini ziyaret edin.

## Yayına Alma

Bu proje Vercel veya benzeri platformlarda kolayca yayınlanabilir. Herhangi bir dinamik sunucu tarafı işlemi veya veritabanı bağlantısı gerektirmediği için Next.js'in statik dışa aktarma (static export) özelliklerinden tam verimlilikle yararlanır.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LİSANS dosyasına bakabilirsiniz.
