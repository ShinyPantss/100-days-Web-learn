# 100 days Web learn
 # Web Development Notes

# Day  5

### Adding Image

<img scr= , alt = >.   → no end tag , 

scr means  → source which is image , 

alt → means if fails upload fails it gaves message

### Styling image

Img bodynin bir contenti oldugu icin styling(Yerini ayarlarken) yaparken body{   } arasina yaziyoruz. Buraadaki mantik headleri text aligment yaparken elemntten ziyade icindeki contenti yani yazinin yerini ayarliyoruz. 

Ayni o sekilde yeri ayarlamak icin body bir elemnt img ta onun contenti oluyor bu sekilde css dosyasi icinde yerini ayarlayabilir.

En ve boyunu widght and lenght , cember yapmak icinde border-radiusu kullanabiliriz.

### Syling overall page

Sayfaya ustten bir miktar bosluk eklemek icin merge

Background -color sayfanin rengi iicn.

# Day 6

Child - parenta karsi kazaniyor css’te , child icinde de ayni ozellikte en asagidaki hangisiyse o kazanir.

# Day 7

### Css Box model

- padding ile bir box icine alip bunu buyutup kucultebiliriz. Yani Yaziyi daha buyuk bir dikdortgen icine alyioruz gib dusunulebilir
- Border ekleyebiliriz. Border featrue i uc degisken alir. Genislik. tip(line,solid) Ve renk.
- Son olarak margin elementi var. Bu Gorunen bir sey degil. Sitedeki konumu ayarlamaya yarar.
    
    
    Padding icin 4 farkli deger ekleyebiliri  sirasiyla saat gibi dusunecek olursak, top right bottom left seklinder gider.
    
    Margin de ise sadece dikey ve yatay genislik belirtiriz
    
    Border da sadece tipi rengi ve kalinligi seklinde olur
    

### Web Html Structure

[https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

Main , header ,footer gibi html elementleri kullanarak yazdigimiz kodu daha anlasilir ve takip edilmesi kolay hale getirebiliriz.

Styling yaparken ornek olarak header dosyasi icindeki paragrafa ulasacaksak → header p{  styling } seklinde ulasip header iicndeki tum paragraflari etkileyebiliriz.

### Selectors and Combinators

4 tane selector → 

1. Direkt element name
2. id 
3. Group name 
4. Yeni ogrenecegim olan class → Bu sekilde belirli bir class belirleyip ornek olarak bir listenin elementlerinin bir kismini bunun icine alarak istedigimiz stylingi yapabiliriz

### Block and Inline Elements

[https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

block elementler satirin tamamini kapsarken, inline elemnts dahil edilir.

Her block element yeni satir yaratir. Inlinelar block icinde kullanilabilir ve sadece oldugu alan kadar yer kaplar

inline elemnts ornekler

1. a
2. img
3. button
4. span → texting spesifik bir kismini ozellestirmeye yarar

# Day 8

- Inline elemnentlerin ustunde margin calismiyor. Buraya eklenen margin veya padding diger elementleri kaydirmiyor. Block elementlerde kaydirir.
- Bu durumu display kullanarak cozeriz. Inline - block  propertsi il
- inline elementsler replace and unreplace olarai ayriliyor. replace olanlar dikeyde marginden etkileniyor

## Margin Collapse

Eger iki blok elementin de margini var ise buyuk olan margin kazanir. Ancak display uygulanmis inline elementlerde boyle bir durum soz konusu degildir. 

### Box Shadow Property

Golge eklemimizi saglar. ( x , y , kalinlik , yayginlik)

- Bir Challenge tamamladim. Negatif margin kullanmayi ogrendim. Ayrica span kullanimini da ogrendim bu projeden