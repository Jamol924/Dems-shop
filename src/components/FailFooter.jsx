import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Back } from "./Back";
import MinNav from "./common/MineNavbar/MinNav";
import Nav2 from "./Nav2";
import { useSelector } from "react-redux";
import L from "../locale/language.json";
function FailFooter() {
  const lon = useSelector((state) => state.allLanguage);
  return (
    <>
      <Wrapper>
        <Nav2 />
        <MinNav />
        <Back />
        <StyledTable>
          <Typography sx={{mb:1}} variant="h5">{L.Foter.name[lon]}</Typography>
          <Typography sx={{mb:1}} variant="h6">{L.Foter.qoida[lon]}</Typography>
          <Typography sx={{mb:1}} variant="h6">1.{L.Foter.qoida1[lon]}</Typography>
          <Typography sx={{mb:1}} variant="h6">{L.Foter.qoida2[lon]}</Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            2.O‘zbekiston Respublikasi Fuqarolik kodeksining 367-375 moddalariga
            muvofiq mazkur Kelishuv ommaviy oferta hisoblanadi hamda quyida
            keltirilgan shartlar (aksept) qabul qilingan taqdirda muomalaga
            layoqatli har qanday jismoniy yoki yuridik shaxs (matnda keyingi
            o‘rinlarda Foydalanuvchi) mazkur Kelishuv shartlarini bajarish
            majburiyatini zimmasiga oladi.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            3.Mazkur ofertada, agar matnda boshqa hol belgilanmasa, quyida
            keltirilgan atamalar quyidagi ma‘nolarni anglatadi: Oferta – har
            qanday jismoniy va/yoki yuridik shaxsga qaratilgan, mazkur Kelishuv,
            shuningdek, uning ilovalarida keltirilgan shartlarda Bajaruvchi
            bilan xizmat ko‘rsatish to‘g‘risidagi shartnomani tuzish haqidagi
            Bajaruvchining ommaviy taklifi; Aksept – Foydalanuvchi tomonidan
            Kelishuv shartlarining to‘liq qabul qilinishi; Bajaruvchi – Dems
            MCHJ; Sayt – http://dems.uz – Kompaniya tomonidan ma‘murlik amalga
            oshiriladigan, vaqtinchalik tasniflangan e‘lonlarni joylashtirish
            uchun kommunikatsiya platformasi sifatida xizmat qiluvchi
            internet-sayt; Foydalanuvchi – mazkur Kelishuv shartlarini qabul
            qilgan va Kompaniya xizmatlaridan foydalanuvchi har qanday muomalaga
            layoqatli jismoniy yoki yuridik shaxs; Tovar – har qanday moddiy
            yoki nomoddiy ob‘ekt; Xizmat – muayyan harakatni sodir etish
            jarayonida iste‘mol qilinadigan yoki buyurtmachining shaxsiy
            ehtiyojlarini qondirish uchun muayyan faoliyatni amalga oshirida
            ko‘rsatiladigan servis bilan bog‘liq ,tovar yetkazib berish
            bo‘lmagan har qanday operatsiyadir; DEMS.uz xizmatlari/servisi –
            Bajaruvchi tomonidan Sayt yordamida ko‘rsatiladigan har qanday pulli
            va bepul xizmatlar (masalan, shu jumladan, ammo mutlaq emas, uning
            barcha imkoniyatlari, matni, ma‘lumotlari, axborot, dasturiy
            ta‘minoti, grafiklar yoki fotosuratlari, rasmlar va h.k. va b.),
            shuningdek Kompaniya tomonidan Saytlar servislari yordamida
            ko‘rsatiladigan har qanday boshqa xizmatlar. Qaydni hisobga
            olish/akkaunt – Saytlarda Foydalanuvchiga o‘z e‘lonlarini boshqarish
            imkoniyatini beruvchi, saytlar funksional tizimidagi elektron
            kabinet; Ro‘yxatdan o‘tish – Foydalanuvchi tomonidan mazkur
            Kelishuvni tuzishga ofertani qabul qilish va Saytning tegishli
            shakllarni to‘ldirish yo‘li bilan Sayt servislardan foydalanish
            uchun zarur axborotni taqdim etish jarayonidir. Ro‘yxatga olishning
            barcha bosqichlari e‘lon qilingan yo‘riqnomalarga muvofiq
            muvaffaqiyatli o‘tilganidan keyin u tugallangan hisoblanadi .
            Shaxsiy ma‘lumotlar – bu shaxsning kimligi aniqlangan yoki
            aniqlanishi mumkin bo‘lgan u haqdagi ma‘lumotlar yoki ma‘lumotlar
            to‘plami. SMS-verifikatsiya – bu Foydalanuvchini tekshirish bo‘lib,
            Foydalanuvchi tomonidan verifikatsiya sahifasida ko‘rsatilgan
            raqamga Kompaniya tomonidan yuborilgan SMS-xabardagi maxsus
            verifikatsiya kodini verifikatsiya sahifasidagi tegishli maydonga
            kiritish orqali amalga oshiriladi.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            4.Agar Foydalanuvchi mazkur shartlardan to‘liq yoki qisman norozi
            bo‘lsa, Bajaruvchi undan mazkur saytni tark etishni so‘raydi. Mazkur
            shartlar Foydalanuvchi tomonidan Saytdan va DEMS.uz xizmatlaridan
            foydalanishni tartibga soladi. DEMS.uz xizmatlaridan foydalanish
            Foydalanuvchi mazkur kelishuv bilan tanishganini, uni tushunishini
            va uning shartlarini qabul qilishini anglatadi.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            5.DEMS.uzning qaysidir servisidan foydalanishni boshlaganda yoki
            ro‘yxatdan o‘tib ,Foydalanuvchi Kelishuv shartlarini to‘liq, hech
            bir qo‘shimchalarsiz va istisnolarsiz qabul qilgan hisoblanadi. Agar
            Foydalanuvchi mazkur Kelishuvning qaysidir qoidasidan norozi bo‘lsa
            Foydalanuvchi DEMS.uz servislaridan foydalanishga haqli emas.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            6.Ushbu orqali Kompaniya Internet tarmog‘i Foydalanuvchilariga o‘z
            servislaridan mazkur Kelishuvda keltirilgan shartlar asosida
            foydalanishni taklif etadi.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            7.Kompaniya Foydalanuvchiga sotish yoki boshqa Foydalanuvchilar
            tomonidan sotib olinishi maqsadida, biroq, faqatgina buning uchun
            emas, turli tovarlar va xizmatlar haqidagi ma‘lumotlarni
            joylashtirish uchun DEMS.uz Saytidan foydalanish bo‘yicha
            xizmatlarni taklif etadi.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            8.Foydalanuvchilar o‘rtasidagi barcha bitimlar to‘g‘ridan-to‘g‘ri
            tuziladi, ya‘ni Kompaniya Foydalanuvchilarning bitimlari ishtirokisi
            hisoblanmaydi, balki faqatgina e‘lonlarni joylashtirish uchun
            kommunikatsion savdo platformasini taqdim etadi.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            9. Tomonlarning huquq va majburiyatlari shuningdek,mazkur
            Kelishuvning ajralmas qismi boʻlgan maqolalar va boshqa axborot
            materiallari bilan ham belgilanishi mumkin.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            2. E‘LONLARNI JOYLASHTIRISH 1.Taklif etilayotgan tovarlar va
            xizmatlarga tavsif berib, maxsus shaklni to‘ldirgandan so‘ng
            Foydalanuvchi Saytlarda e‘lon joylashtirish huquqiga ega bo‘ladi.
            2.Bundan tashqari, qo‘shimcha xizmatlarni olish maqsadida
            Foydalanuvchi faqat o‘zi foydalanishi mumkin bo‘lgan haqiqiy telefon
            raqamini, tanlangan parolь, va ro‘yxatdan o‘tish uchun zarur bo‘lgan
            boshqa ma‘lumotlarni ko‘rsatgan holda shaklni to‘ldirib, Saytda
            ro‘yxatdan o‘tishi mumkin. Bundan so‘ng Foydalanuvchi SMS-xabar
            oladi va ro‘yxatdan o‘tishni yakunlash uchun, undagi kodni tegishli
            qatorda ko‘rsatishi lozim bo‘ladi.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            3.Ro‘yxatdan o‘tgan va ro‘yxatdan o‘tmagan Foydalanuvchilar
            tomonidan Saytning imkoniyatlaridan va servislaridan foydalanish
            DEMS.uz xizmatlaridan foydalanish bo‘yicha qoidalar va
            yo‘riqnomalarga rioya etish majburiyatini olganlikni anglatadi.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            4.Foydalanuvchi Saytga kirish uchun uning telefon raqami va
            parolidan foydalanish bo‘yicha barcha harakatlar uchun javobgarlikni
            o‘z zimmasiga oladi. Foydalanuvchi faqat o‘z telefon raqami va
            paroli yordamida Saytning xizmatlaridan foydalanish huquqiga ega.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            5.Foydalanuvchi unga taqdim etilgan parolning maxfiyligini saqlash
            va uni uchinchi shaxslarga oshkor qilmaslik majburiyatini oladi.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            6.Agar Foydalanuvchida Saytga kirish uchun foydalaniladigan telefon
            raqami va parol oshkor etilganligi yoki uchinchi shaxslar tomonidan
            foydalanilishi mumkinligiga gumon qilish uchun asos bo‘lsa u darhol
            Saytga kirish ma‘lumotlarini o‘zgartirishi lozim.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            7.Tovarlar yoki xizmatlarni sotish haqida Saytga e‘lon
            joylashtirayotgan Foydalanuvchi ular haqidagi ma‘lumotlarni mazkur
            kelishuv va Saytda keltirilgan yo‘riqnomalarga muvofiq holda
            joylashtirish va tovarlar va xizmatlar va ularni sotish shartlari
            haqida aniq va to‘liq ma‘lumot berish majburiyatini oladi. Tovar va
            xizmat haqida ma‘lumotni joylashtirib, Foydalanuvchi o‘zining ular
            sotilishi amalga oshiriladigan davlatlar qonunchiligiga muvofiq
            ushbu tovarni sotishi yoki ushbu xizmatni ko‘rsatish xuquqiga ega
            ekanligini tasdiqaydi. Xususiy shaxs tomonidan joylashtirilgan
            ko‘chmas mulk ob’yektini sotish / ijaraga qo‘yish to‘g‘risida e’lon
            joylashtirilganda, Foydalanuvchi Kompaniyaga joylashtirilayotgan
            ob’yektga egalik huquqini tasdiqlaydigan hujjatlarni, shu jumladan
            pasport, ko‘chmas mulkka egalik huquqini va u bilan amalga
            oshirilgan oldi-sotdilarni tasdiqlaydigan davlat reyestridan
            ko‘chirma (yoki egalik huquqini tasdiqlaydigan boshqa hujjatlar)
            taqdim etish majburiyatini oladi. Foydalanuvchi mazkur hujjatlarni
            taqdim etishdan bosh tortgan taqdirda, Kompaniya Foydalanuvchi e’lon
            joylashtirishini rad etishga haqli.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            8.Foydalanuvchi u tomondan taklif etiladigan tovarlar/xizmatlar,
            ular sotilishi amalga oshiriladigan davlatlar qonunchiligida
            belgilangan sifat me‘yorlariga javob berishini va uchinchi shaxslar
            da‘vosidan ozod ekanligini kafolatlaydi.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            9.Agar Foydalanuvchi tomonidan taqdim etiladigan xizmatlar maxsus
            ruxsatnoma yoki litsenziya olishni talab etsa, ushbu xizmatlar
            foydalanuvchining bunday faoliyati ustidan nazoratni amalga
            oshirishga vakolatli davlat organlari va qonunchilik talablariga
            muvofiq amalga oshirilishini kafolatlaydi.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            10.Foydalanuvchi u tomondan Saytda joylashtirilgan tovarlar va
            xizmatlar haqidagi barcha ma‘lumotlarni batafsil tekshirishi va
            noto‘g‘ri ma‘lumot aniqlagan taqdirda tovar yoki xizmatning
            tavsifiga zarur ma‘lumotlarni kiritishi lozim. Agar buning iloji
            bo‘lmasa, e‘lonni bekor qilib, tovar yoki xizmat haqidagi ma‘lumotni
            qayta joylashtirish orqali noto‘g‘ri ma‘lumotni tuzatishi lozim.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            11.Tovar yetkazib berish shartlari tovar tavsifida, xizmat
            ko‘rsatish shartlari xizmat ko‘rsatish tavsifida berilishi lozim.
            Foydalanuvchi tomonidan tovarni sotish va xizmatlar ko‘rsatish
            shartlari mazkur Kelishuvga va amaldagi qonunchilikka zid
            bo‘lmasligi lozim.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            12.Foydalanuvchi Bajaruvchining raqobatchilariga faol yordam
            ko‘rsatmaslik va ular tomonidan ko‘rsatiladigan xizmatlar haqidagi
            ma‘lumotlarni tarqatmaslik majburiyatini oladi. Quyida
            keltirilganlar kabi, ammo mutloq emas: Boshqa e‘lonlar taxtalari,
            savdo maydonchalari, internet-auktsionlari va/yoki
            internet-do‘konlar haqidagi ma‘lumotlar; Saytda sotilishi
            taqiqlangan tovarlar va xizmatlarni taklif etuvchi
            internet-resurslar haqida.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            13.Kompaniya uning nazorati ostida bo‘lgan yoki nazorati ostida
            bo‘lmagan texnik sabablarga ko‘ra Foydalanuvchining tovar yoki
            xizmat haqidagi e‘lonni ko‘chirish, tugatish yoki uni ko‘rsatish
            muddatini uzaytirish huquqiga ega. Agar Foydalanuvchi tovar yoki
            xizmatni mazkur Kelishuv yoki amaldagi qonunchilik shartlarini
            buzgan holda ro‘yxatdan o‘tkazgan bo‘lsa Sayt e‘lon ko‘rsatilishini
            to‘xtatish huquqiga ega.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            14.Foydalanuvchiga quyidagilar taqiqlanadi:
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            Aynan bir telefon raqamidan bir xil e‘lonlarni joylashtirish;
            Mazmunidan aynan bir xil taklif haqida gap borayotgan, mazmun
            jihatdan bir xil e‘lonlarni joylashtirish; Har xil telefon
            raqamlaridan bir xil e‘lonlarni joylashtirish; E‘lonlarni uning
            mazmuniga nomuvofiq ruknlarda joylashtirish; Sarlavhasida
            takrorlanuvchi punktuatsiya belgilari va/yoki harfli bo‘lmagan
            belgilar mavjud bo‘lgan e‘lonlarni joylashtirish; Tavsifi va/yoki
            sarlavhasi/fotosuratlari o‘zaro bog‘liq bo‘lmagan e‘lonlarni
            joylashtirish; Bir pa ytning o‘zida bir necha tovarlar va xizmatlar
            taklif qilinayotgan e‘lonlarni joylashtirish; E‘lonlarda zararli
            elementlar mavjud bo‘lgan sahifalarga yoki saytning bosh sahifasiga
            havolalar berish; Huquqni qo‘llovchi qonunchilikning buzilishiga
            olib kelishi mumkin bo‘lgan tovarlar va xizmatlar bo‘yicha
            e‘lonlarni joylashtirish. E‘lonlar Saytning tegishli funksional
            sozlamalarida tanlangan geografik viloyat va shaharga muvofiq
            kelishi lozim. Aniq bir predmet, mulk ob‘ekti, ish o‘rni, xizmat
            bo‘yicha bitta e‘lonni joylashtirish mumkin.{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            «Go’zallik-salomatlik» bo’limidagi e’lonlarda shaxsiy fotosuratlarni
            joylashtirish (ommaviy foto banklaridan yuklab olinmagan
            fotosuratlar);
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            15.E‘lonlar Kompaniya vakillari tomonidan tanlov asosida post yoki
            premoderatsiyadan o‘tkazilishi mumkin.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            16.Quyidagilarning savdosini reklama qiluvchi e‘lonlarni
            joylashtirish ta‘qiqlanadi:{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            spirtli ichimliklarni; tamaki mahsulotlarini; giyohvandlik
            vositalarini; pornografik materiallar yoki predmetlarni;
            farmakologik mahsulotlarni, dori vositalarini, giyohvandlik
            vositalarini va prekursorlarni; o‘g‘irlangan, noqonuniy yo‘llar
            bilan olingan tovarlarni; hayot va salomatlik uchun xavf
            tug‘diruvchi predmetlarni; mavjud bo‘lmagan tovarlarni; odam va
            hayvon organlarini; mahfiy ma‘lumot olish uchun maxsus vositalarini;
            davlat mukofotlarini; shaxsiy hujjatlarni, shuningdek, ushbu
            hujjatlar blanklarini; ma‘lumotlar bazalarini; o‘qotar, sovuq,
            jarohat yetkazuvchi qurollarni, shuningdek, harbiy qurollar va ular
            butlovchilarini; huquqni muhofaza qiluvchi organlar tomonidan
            qo‘llaniladigan faol himoya vositalarini; morj qoziqtishlarini,
            buyum shaklila bo‘lmagan fil va mamont tishini, shuningdek, buyum
            shaklida bo‘lmagan qimmatbaho metallar va qimmatbaho toshlarni;
            noyob va sotilishi taqiqlangan hayvonlarni, tegishli qonunchilik
            bilan taqiqlangan har qanday boshqa tovarlar va xizmatlarni. Saytda
            taqiqlangan tovarlar, xizmatlar va takliflarning to‘liq ro‘yxati
            bilan quyidagi havola orqali tanishish mumkin: DEMS.UZ Kompaniya
            e‘lon egasining yoki vakolatli davlat organlarining talabi bilan
            e‘lonlarni o‘chirish huquqiga ega. Kompaniya shuningdek, uning
            fikriga ko‘ra, ijtimoiy axloq tamoyillari va negizlariga muvofiq
            kelmaydigan deb hisoblagan e‘lonlarni o‘chirish huquqini o‘zida
            qoldiradi. O‘chirish haqidagi qaror qat‘iy hisoblanadi va qayta
            ko‘rib chiqilmaydi.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            17.Saytning ma‘muriyati va moderatorlari (Kompaniyaning vakillari)
            quyidagi vakolatlarga ega:{" "}
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            Foydalanuvchi e‘lonining matniga, umumiy mazmun-mohiyatiga ta‘sir
            qilmaydigan, orfografiya va punktuatsiyaga oid bo‘lgan
            o‘zgartirishlarni kiritish; Joylashtirish uchun ko‘proq mos
            keladigan rukn aniqlanganida e‘lonlarni ular Saytning boshqa mos
            ruknlarga ko‘chirib o‘tkazish; E‘lonlar tanlangan bo‘limlarning
            mavzusiga muvofiq bo‘lmaganda yoki mazkur Kelishuvni buzganida
            e‘lonlar joylashtirilishini rad etish, shuningdek, Saytdan
            foydalanishni qulaylashtirish maqsadida sababini ko‘rsatmagan holda
            bitta Foydalanuvchidan beriladigan e‘lonlar sonini cheklash huquqiga
            ega. E‘lon taklifining predmetiga noto‘g‘ri tavsif berishga,
            shuningdek, tovar yoki xizmatni haqiqiy sotish narxiga to‘g‘ri
            kelmaydigan narxni ko‘rsatish mumkin emas. Narx butun tovar yoki
            xizmat uchun to‘liq ko‘rsatilishi lozim. Joylashtirilayotgan
            e‘lonning sarlavhasi e‘lon matniga muvofiq bo‘lishi va o‘zida
            Foydalanuvchining aloqa yoki shaxsiy ma‘lumotlari (telefon, elektron
            manzil, internet-resurs manzili)ni aks ettirmasligi lozim.
            Foydalanuvchi tomonidan sotishga taklif qilinayotgan tovar/xizmatni
            aks ettiruvchi fotosurat e‘lon sarlavhasiga va matniga muvofiq
            bo‘lishi lozim. Fotosuratda faqat taklif qilinayotgan ob‘ekt aks
            etishi lozim. Stok va/yoki internet tarmog‘idan olingan
            fotosuratlarni joylashtirish mumkin emas. Foydalanuvchilar
            o‘rtasidagi muloqotni yengillashtirish maqsadida Kompaniya boshqa
            foydalanuvchilarning aloqa ma‘lumotlarinidan foydalanish
            imkoniyatini chegaralashi mumkin. Boshqa Foydalanuvchilar tomonidan
            taqdim etilgan ma‘lumotlardan foydalanish huquqi mazkur Kelishuv
            bilan cheklanadi. Kompaniya foydalanuvchilar e‘lonlarining mazmuni
            yoki ularning tavsiflarida keltirilgan resurslarga havolalar uchun
            javobgarlikni zimmasiga olmaydi. Tovarlar yoki xizmatlar sotiladigan
            davlatlarning qonunchiligiga muvofiq sotilishi taqiqlanmagan yoki
            cheklanmagan, shuningdek, mazkur kelishuvga zid kelmaydigan tovarlar
            yoki xizmatlar e‘lonlarning predmeti bo‘lishi mumkin.
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            3.FOYDALANUVCHILARNING SHAXSIY MA‘LUMOTLARINI QAYTA ISHLASH
            SHARTLARI VA BUNGA ROZILIK
          </Typography>
          <Typography sx={{mb:1}} variant="h6">
            {" "}
            1.E‘lonlarni joylashtirishda Sayt foydalanuvchilari Kompaniyaga
            ushbu Kelishuvning 1-Ilovasida (MAXFIYLIK SIYOSATI) keltirilgan
            shartlarga muvofiq oʻz shaxsiy ma‘lumotlarini qayta ishlash huquqini
            taqdim etishadi.
          </Typography>
        </StyledTable>
      </Wrapper>
    </>
  );
}

export default FailFooter;

export const Wrapper = styled.div`
  max-width: 100%;
  height: auto;
`;
export const StyledTable = styled.div`
  padding: 0px 50px;
  @media (max-width: 550px) {
    padding: 30px 20px;
  }
`;
