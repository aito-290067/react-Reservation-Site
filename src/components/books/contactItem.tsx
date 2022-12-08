import { Link } from "react-router-dom";

const contactHotelList = [
  {
    question: "チェックイン・チェックアウトの時間は？",
    answer: "チェックインは15:00以降、チェックアウトは10:00までとなります。",
  },
  {
    question: "チェックイン前、チェックアウト後に荷物を預けられますか？",
    answer: (
      <p>
        はい、お預りいたします。但し、チェックアウト後のお預りは、当日中にお持ち頂く場合に限らせて頂きます。
        <br />
        また、団体様のお荷物お預りについては、収納場所の兼合いでお受け出来ない場合もございます。事前にご相談ください。
      </p>
    ),
  },

  {
    question: "客室に備え付けの備品はどのようなものがありますか？",
    answer: (
      <p>
        客室により若干異なります。
        <br />
        <span>
          詳細につきましては、
          <Link to="/rooms/Gestroom">「客室」ページよりご確認ください。</Link>
        </span>
      </p>
    ),
  },
  {
    question: "ホテルから荷物を送れますか？",
    answer: (
      <p>
        ヤマト運輸の元払いもしくは着払いにて発送可能（いずれも日本国内のみ）でございます。
        <br />
        またダンボール箱（有料）、ガムテープ（無料）も用意がございますのでお気軽にお申し付け下さい。
      </p>
    ),
  },
  {
    question: "子供と一緒に宿泊できますか?",
    answer: (
      <p>
        小学生未満の小さいお子様でしたら添い寝をしてご利用頂けます。添い寝のお子様の宿泊料金は無料です。
        <br />
        <span>
          ※ご予約時の「子供」は小学生以上、中学生未満のお客様を意味します。
          <br />
          ベビーベッドご希望のお客様はご予約時にお申し付けください。
        </span>
      </p>
    ),
  },
  {
    question: "未成年だけで宿泊出来ますか？",
    answer:
      "はい、当ホテルは未成年の方でも宿泊は可能です。また特に必要な書類等もございません。",
  },
  {
    question: "ペットは宿泊出来ますか？",
    answer: "申し訳ありませんがペット同伴での宿泊はお断りしています。",
  },
];

const contactReserveList = [
  {
    question: "お部屋の階数を指定することは出来ますか？",
    answer: "リクエストとして承りますので、ご予約の際にお問合せください。",
  },
  {
    question: "キャンセルがしたいです。",
    answer: <p>ご予約のキャンセルはお電話にて承っております。<br />
    TEL：03-0000-0000</p>
  },
  {
    question: "キャンセル料について教えてください。",
    answer: (
      <p>
        ご宿泊をキャンセルされる場合は、以下のようにキャンセル料を申し受けます。
        <br />
        <span>
          当日：宿泊料金の80%
          <br />
          1日前：宿泊料金の20%
          <br />
          連絡なしキャンセル：宿泊料金の100%
        </span>
      </p>
    ),
  },
  {
    question: "キャンセル待ちは出来ますか？",
    answer: "申し訳ありませんがキャンセル待ちはお受け出来かねます。",
  },
  {
    question: "使用可能なクレジットカードについて教えてください。",
    answer:
      "ビザ・マスター・JCB・AMEX・UFJニコス・セゾンをご利用いただけます。",
  },
];

const contactAtherList = [
  {
    question: "滞在中、急に具合が悪くなったら？",
    answer: (
      <p>
        ホテルにはお客様の緊急時の対応をさせていただくデューティーマネージャーが24時間体制で勤務しておりますので、遠慮なくご相談ください。
        <br />
        症状や様態などに応じて、ホテル近隣の病院をご案内いたします。
        <br />
        客室よりデューティーマネージャーへは、ダイヤル Ｆ または 188
        をお呼び出しください。
      </p>
    ),
  },
  {
    question: "観光バスツアーの手配をしたいです。",
    answer:
      "本館1階のベルカウンターまたはコンシェルジュデスクにてご予約を承っております。",
  },
];

export { contactHotelList, contactReserveList, contactAtherList };
