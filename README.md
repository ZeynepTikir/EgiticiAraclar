# 📚 Eğitim Araçları Portalı (İnteraktif Matematik Laboratuvarı)

Bu proje, ortaokul matematik müfredatına (5, 6, 7 ve 8. sınıflar) yönelik olarak geliştirilmiş **saf HTML, CSS ve JavaScript tabanlı interaktif eğitim araçları ve simülasyonlar** portalları bütünüdür. 

Öğrencilerin kavramları görselleştirerek ve deneyerek öğrenmesini amaçlar. Proje tamamen statik web teknolojileriyle yazılmış olup **Vercel** üzerinden canlı olarak yayınlanmaktadır.

---

## 🚀 Proje Yapısı

Proje, sunucu gerektirmeyen modern bir statik web mimarisine sahiptir:

```text
egitici-araclar/
├── index.html              # Ana Sınıf Seçim Ekranı
├── sinif.html              # Dinamik Ünite ve Araç Listeleme Şablonu
├── data.js                 # Tüm sınıf, ünite ve araçların yönetildiği merkezi veri dosyası
├── 5_sinif/                # 5. Sınıf Etkinlikleri
├── 6_sinif/                # 6. Sınıf Etkinlikleri
├── 7_sinif/                # 7. Sınıf Etkinlikleri
└── 8_sinif/                # 8. Sınıf Etkinlikleri
    ├── 1_Carpanlar_ve_Katlar/
    ├── 2_Uslu_Ifadeler/
    ├── 3_Karekoklu_Sayilar/
    ├── 4_Veri_Analizi/
    ├── 5_Olasilik/
    ├── 6_Cebirsel_Ifadeler_ve_Ozdeslikler/
    └── 7_Bir_Bilinmeyenli_Denklemler/
```

## 🛠️ Kullanılan Teknolojiler

HTML5 / CSS3 / JavaScript (ES6+): Arayüz tasarımı, animasyonlar ve interaktif laboratuvar mantığı.

SVG (Scalable Vector Graphics): Matematiksel alan modellemeleri ve geometrik çizimler.

Vercel: Hızlı, güvenli ve ücretsiz statik web barındırma (hosting) platformu.

## 📂 Projeye Yeni Bir Etkinlik Nasıl Eklenir?

Yeni bir HTML tabanlı araç geliştirdiğinizde sisteme entegre etmek çok kolaydır:

İlgili sınıf ve ünite klasörünün altına HTML dosyanızı yükleyin (Örn: 8_sinif/1_Carpanlar_ve_Katlar/yeni_etkinlik.html).

Not: Dosya adlarında Türkçe karakter ve boşluk kullanmamaya özen gösterin.

data.js dosyasını açın ve ilgili ünitenin araclar dizinine yeni aracınızı ekleyin:

```
{ ad: "Yeni Etkinlik Adı", dosya: "8_sinif/1_Carpanlar_ve_Katlar/yeni_etkinlik.html" }
```

Değişiklikleri GitHub'a gönderdiğinizde Vercel projeyi otomatik olarak güncelleyecektir.

## 🌐 Canlı Önizleme

Projeyi canlı olarak incelemek ve test etmek için: [Proje Linki için Tıklayınız.](https://egiticiaraclar.vercel.app/)
