(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{7763:(a,e,n)=>{Promise.resolve().then(n.bind(n,5884))},5884:(a,e,n)=>{"use strict";n.d(e,{OrderList:()=>g});var i=n(5155),r=n(6733),t=n(4721);let s=async a=>{let e=await fetch(a);if(!e.ok)throw Error("Network response was not ok");return e.json()};var u=n(2115),l=n(860),d=n(3691),m=n.n(d),k=n(1160);let o=a=>{let{order:e}=a,[n,t]=(0,u.useState)(!1),s=(0,u.useRef)(null);return(0,i.jsxs)("div",{className:"p-3 border border-gray-200/20 rounded-md shadow-md",children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("h2",{className:"font-bold",children:["Pesanan ",e.name]}),(0,i.jsx)("table",{className:"table table-sm mt-4 table-zebra",children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Tanggal Pemesanan"}),(0,i.jsx)("td",{children:m()(e.createdAt).format("HH:mm dddd, DD MMM YYYY")})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Nama pemesan"}),(0,i.jsx)("td",{children:e.name})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Kode Unik*"}),(0,i.jsx)("td",{children:e.uniqueNumber})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Jumlah Bayar"}),(0,i.jsx)("td",{children:(0,k.h)(e.totalPayment)})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Status"}),(0,i.jsx)("td",{children:(0,i.jsx)("div",{className:{UNPAID:"badge badge-warning",PAID:"badge badge-success",SHIPPED:"badge badge-info",DELIVERED:"badge badge-success",CANCELLED:"badge badge-error",CHECKING_PAYMENT:"badge badge-info"}[e.status],children:e.status})})]})]})}),(0,i.jsx)("p",{className:"text-xs",children:"* Untuk identifikasi pembayaran"})]}),(0,i.jsxs)("button",{className:"btn btn-sm btn-outline",onClick:()=>{t(a=>!a)},children:[n?"Sembunyikan":"Lihat"," Pesanan Buku"]}),n&&(0,i.jsx)("div",{className:"border p-2 mt-3 rounded-md border-gray-200/50",children:(0,i.jsxs)("table",{ref:s,className:"table table-zebra table-sm",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Judul"}),(0,i.jsx)("th",{children:"Jumlah"}),(0,i.jsx)("th",{children:"Harga"})]})}),(0,i.jsx)("tbody",{children:e.OrderedBooks.map(a=>{var e;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:null===(e=r.IV[a.bookSlug])||void 0===e?void 0:e.title}),(0,i.jsx)("td",{children:a.quantity}),(0,i.jsx)("td",{children:(0,k.h)(a.totalPrice)})]},a.id)})})]})})]})},g=()=>{let[a,e]=(0,t.M)(r.SS,{nama_lengkap:"",no_hp:"",email:"",jumlah_pemesanan:0,kecamatan:"",alamat:""}),[n,d]=(0,u.useState)(a.email),{data:m,error:k,isLoading:g}=(0,l.Ay)("".concat("https://bukuesto-backend.vercel.app","/api/orders?email=").concat(null==a?void 0:a.email),(null==a?void 0:a.email)?s:null);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:i=>{i.preventDefault(),e({...a,email:n})},className:"flex gap-2 items-center justify-between lg:justify-start",children:[(0,i.jsxs)("label",{className:"input input-bordered flex items-center gap-2 flex-1 lg:w-[250px] flex-shrink-0",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"h-4 w-4 opacity-70",children:[(0,i.jsx)("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"}),(0,i.jsx)("path",{d:"M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"})]}),(0,i.jsx)("input",{type:"text",value:n,className:"grow",placeholder:"Email",onChange:a=>d(a.target.value)})]}),(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Ubah"})]}),g&&(0,i.jsx)("div",{className:"bg-gray-200 animate-pulse rounded-lg h-24 w-full mt-3"}),!(null==a?void 0:a.email)&&(0,i.jsxs)("div",{role:"alert",className:"bg-warning mt-3 text-primary-content p-3 px-5 flex items-center gap-2 rounded-lg",children:[(0,i.jsx)("i",{className:"bi bi-exclamation-diamond"}),(0,i.jsx)("span",{children:"Masukkan email terlebih dahulu"})]}),m&&0===m.data.length&&(0,i.jsxs)("div",{role:"alert",className:"bg-info mt-3 text-primary-content p-3 px-5 flex items-center gap-2 rounded-lg",children:[(0,i.jsx)("i",{className:"bi bi-exclamation-diamond"}),(0,i.jsxs)("span",{children:["Tidak ada pesanan dengan email ",(0,i.jsx)("strong",{children:a.email})]})]}),m&&m.data.length>0&&(0,i.jsx)("div",{className:"space-y-3 mt-5",children:m.data.map(a=>(0,i.jsx)(o,{order:a},a.id))})]})}},6733:(a,e,n)=>{"use strict";n.d(e,{IV:()=>t,SS:()=>s,VO:()=>l,XQ:()=>u,YK:()=>d,b7:()=>r});let i={title:"Sosial Media Penulis",url:"https://www.instagram.com/estotriramdani"},r=[{order:1,has_stock:!1,slug:"putih-biru",cover:"/images/books/putih-biru.png",title:"Putih Biru",price:4e4,price_currency:"IDR",description:"Putih Biru merupakan buku yang menceritakan pengalaman Esto saat masih SMP. Ditulis dengan gaya komedi membuat pembaca dapat terlalut dalam ceritanya. Cocok dibaca di waktu senggang baik ketika sedang menunggu sesuatu atau seseorang maupun sengaja dibaca di waktu khusus seperti sore hari.\n\nBuku ini berupa kumpulan cerita yang memiliki keterkaitan antara cerita satu dengan yang lainnya.",order_links:[i],published_year:2014,publisher:"Rasibook Publishing",page_info:"iii+173 halaman",book_weight:350},{order:2,has_stock:!1,slug:"putih-biru-2",cover:"/images/books/putih-biru-2.png",title:"Putih Biru 2: Coretan Kecil Pelajar Idiot",price:45e3,price_currency:"IDR",description:"Putih Biru 2 merupakan kelanjutan dari buku sebelumnya yakni Putih Biru. Merupakan kumpulan cerita yang di antaranya merupakan pengembangan dari cerita yang ada di buku sebelumnya. Ditulis masih menggunakan gaya komedi.",order_links:[i],published_year:2014,publisher:"Rasibook Publishing",page_info:"v+177 halaman",book_weight:350,available_online:"full"},{order:3,has_stock:!1,slug:"mantan-manusia",cover:"/images/books/mantan-manusia.png",title:"Mantan Manusia: Melihat Sisi Lain dari Dunia Lain",price:45e3,price_currency:"IDR",description:"Mantan Manusia adalah buku komedi yang ditulis Esto bertema horor karena sebagian besar cerita di buku ini menceritakan pengalaman horor Esto yang pernah dialaminya. Penulisan dengan gaya komedi membuat horor sekalipun bisa ditertawakan karena dapat melihat sisi lain dari horor dari dunia lain yakni di dimensi kita sebagai manusia.\n\nPenulis berharap bagi pembaca yang penakut khususnya terhadap hantu atau sosok lainnya dapat berkurang ketika membaca buku ini, lebih-lebih dapat tertawa ketika tidak sengaja melihat sosok tersebut.",order_links:[i],published_year:2015,publisher:"GED'S Indie Media",page_info:"136 halaman",book_weight:350},{order:4,has_stock:!0,stock_type:"ready",slug:"hujan-dua-arah",cover:"/images/books/hujan-dua-arah.png",title:"Hujan Dua Arah",price:7e4,price_currency:"IDR",description:"Bertema besar romantis, yakni mengenai percintaan, dibarengi dengan tema persahabatan serta diselingi toleransi mengenai keberagaman. Mengisahkan mengenai Adit, tokoh utama novel, berkenalan dengan Bella, teman sekelas Adit yang merupakan anak pindahan dari Makassar. Cerita di novel ini memiliki latar tempat di Bandung dan Jepang, lebih tepatnya distrik Shinjuku.\n\nDua Arah menggambarkan sesuatu yang sulit untuk diubah karena pada dasarnya sudah berbeda arah. Pesan utama yang ingin disampaikan penulis toleransi baik beragama, berbudaya, hingga berteman. Dikemas dalam bentuk novel agar mudah untuk dikonsumsi remaja sampai dewasa yang merupakan target utama pembacanya.",order_links:[i],published_year:2017,publisher:"Ishiyama Digital Media",page_info:"iv + 244 halaman",book_weight:350},{order:5,has_stock:!0,stock_type:"preorder",slug:"hidup-ceria-menuju-bahagia",cover:"/images/books/hidup-ceria-menuju-bahagia.png",title:"Hidup Ceria Menuju Bahagia",price:55e3,price_currency:"IDR",description:"Buku kelima yang ditulis Esto sekaligus buku nonfiksi berupa pengembangan diri pertama yang berhasil ditulis.\nLatar belakang penulisan buku ini yakni rasa peduli yang hadir dari benak penulis melihat fenomena di kalangan pelajar khususnya SD sampai SMA. Banyak terlihat siswa-siswa yang menunjukkan ketidakbahagiaannya di media sosial ataupun secara langsung. Bahkan di media sosial ia terlihat bahagia, tapi di belakang layar ia begitu terpuruk.\n\nMelalui buku ini, penulis mengajak pembacanya terutama pelajar untuk berbahagia di sekolah. Sebab, nyaris sepertiga dari 24 jam atau lebih dihabiskan pelajar di sekolah. Itu pun belum ditambah dengan kegiatan luar sekolah, seperti organisasi dan sebagainya.\nKehidupan di sekolah pun, yakni 12 tahun, tidaklah sebentar. Oleh karena itu, penting itu menumbuhkan rasa bahagia di sekolah. Banyak, kok, yang bisa bikin bahagia di sekolah. Bahkan hanya dengan memerhatikan sebatang pohon pun, kita bisa bahagia.",order_links:[i],published_year:2020,publisher:"Rasibook Publishing",page_info:"xiv + 141 halaman",book_weight:350},{order:6,has_stock:!1,slug:"suara-hati-yang-jarang-tersakiti",cover:"/images/books/suara-hati-yang-jarang-tersakiti.png",title:"Suara Hati yang Jarang Tersakiti",price:35e3,price_currency:"IDR",description:"Sesuatu yang jarang-jarang bisa saja terjadi\nKalau memang sudah waktunya\nJika akan terjadi, terjadilah\nPersiapkan matang-matang\nKarena, sekali lagi, kalau sudah pada waktunya\nSesuatu yang akan terjadi, pasti terjadi\nWaktu itu jarang-jarang\n\nMini-book Esto pertama yang berisi prosa bebas tentang rindu, harapan, dan hal-hal lain yang kadang-kadang terjadi.",order_links:[i],published_year:2020,publisher:"Rasibook Publishing",page_info:"xiv + 141 halaman",book_weight:350},{order:7,has_stock:!0,stock_type:"ready",slug:"titik-temu",cover:"/images/books/titik-temu.png",title:"Titik Temu: Muara Sebuah Perjalanan",price:8e4,price_currency:"IDR",description:"Sejauh apapun kakimu melangkah, secepat apapun lariku, pada akhirnya kita akan bertemu di titik yang sama.\nJadi tenang saja. Sebab, kita pasti bertemu. Tidak hanya sekadar bertamu.\n\nEdwin, seorang pendiam, merasa bosan dengan label introver yang ia malah labelkan sendiri. Jauh di lubuk hati yang terdalam, ia ingin bermain dengan teman sebaya secara leluasa. Ia yakin, seorang introver pasti mendambakan hal itu. Lagian, siapa sih yang tidak ingin bebas?\nAkhirnya, Edwin untuk memutuskan untuk bergabung dengan ekstrakurikuler di sekolahnya. Keikutsertaannya di ekstrakurikuler membuat Edwin mendapatkan makna kepercayaan diri, keberanian, dan cinta.\nDi SMA, berkat bergabung dengan PMR semasa SMP, ia membentuk komunitas menulis yang membuatnya “terbang” ke mana-mana. Ia pun menemukan: kesetiaan, kegigihan, dan kekecewaan—yang jauh lebih berat.\nBandung Selatan menjadi saksi semua itu.\n\nSebuah novel romansa berlatar masa SMA yang memadupadankan berbagai nilai filosofis yang lahir sejak 2.000 tahun lalu.",order_links:[i],published_year:2020,publisher:"Penerbit Haura",page_info:"xiv + 250 halaman",book_weight:350},{order:8,has_stock:!0,stock_type:"ready",slug:"setangkai-mawar-dan-sebatang-cokelat",cover:"/images/books/setangkai-mawar-dan-sebatang-cokelat.png",title:"Setangkai Mawar dan Sebatang Cokelat",price:7e4,price_currency:"IDR",description:"Mawar merah yang kini digenggamnya menjadi salah satu langkah kecil untuk mengempaskan rasa takut yang tak berkesudahan. Ia pikir, semua hal harus dimulai dari hal-hal kecil, dan umum. Umum dalam artian semua orang bisa menerima. Bunga, dia pikir, suatu simbol cinta kasih yang sudah disetujui miliaran manusia di muka bumi. Maka dia hendak memulai dari sana, yakni hal umum, sebelum beranjak menuju hal-hal yang lebih khusus. \n\nDia pun merasa kalau cokelat adalah hal-hal umum yang biasa orang gunakan sebagai simbol cinta kasih. Terlepas dari sehat atau tidaknya cokelat itu, mengikuti kebiasaan masyarakat yang telah mendarah daging adalah hal paling aman untuk dilakukan.",order_links:[i],published_year:2025,publisher:"Penerbit Haura",page_info:"186 halaman",book_weight:350,available_online:"demo"}];[...r.reverse()];let t=r.reduce((a,e)=>(a[e.slug]=e,a),{}),s="bukuesto.inputtedData",u="bukuesto.cart",l="bukuesto.province_data",d="bukuesto.city_data"},4721:(a,e,n)=>{"use strict";n.d(e,{M:()=>r});var i=n(2115);function r(a,e){let[n,r]=(0,i.useState)(()=>{try{let n=window.localStorage.getItem(a);return n?JSON.parse(n):e}catch(n){return console.warn('Error reading localStorage key "'.concat(a,'":'),n),e}}),t=(0,i.useCallback)(e=>{try{let i=e instanceof Function?e(n):e;r(i),window.localStorage.setItem(a,JSON.stringify(i))}catch(e){console.warn('Error setting localStorage key "'.concat(a,'":'),e)}},[a,n]);return(0,i.useEffect)(()=>{function e(e){e.key===a&&e.newValue&&r(JSON.parse(e.newValue))}return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},[a]),[n,t]}},1160:(a,e,n)=>{"use strict";n.d(e,{h:()=>t,y:()=>r});var i=n(5155);let r=a=>a.split("\n").map((a,e)=>(0,i.jsx)("p",{children:a},e)),t=a=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(a)}},a=>{var e=e=>a(a.s=e);a.O(0,[586,860,441,517,358],()=>e(7763)),_N_E=a.O()}]);