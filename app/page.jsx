export default function Page() {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Philosophia - フィロソフィア</h1>
        <nav>
          <ul>
            <li><a href="#corporate-message">Corporate Message</a></li>
            <li><a href="#our-business">Our Business</a></li>
            <li><a href="#recruit">Recruit</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Corporate Message Section */}
        <section id="corporate-message">
          <h2>Corporate Message</h2>
          <h3>哲学の祖ソクラテスは、「ただ生きるのではなく、善く生きる」ことこそが、人が追い求めるべき、最大の命題だと説きました。</h3>
          <p>私たちは医療・介護の領域からこの命題に挑戦します。</p>
          <p>できること、楽しめることが広がった毎日を、患者さんへ。自分らしさや得意を生かして働ける毎日を、仲間たちへ。</p>
          <p>医療・介護のあり方を模索し続けることで、フィロソフィアは関わるすべての人に向け、「善く生きる」人生を届けていきます。</p>
          <p>Not just to live but to live well.</p>
        </section>

        {/* Our Business Section */}
        <section id="our-business">
          <h2>Our Business</h2>
          <h3>私たちの仕事</h3>
          <p>「慣れ親しんだ街で、安心して暮らせる」「病気とうまく付き合いながら、自分らしく過ごせる」。そんな“善く生きる毎日”を生みだすために、フィロソフィアでは訪問看護/療養施設運営などの事業を展開しています。</p>
          <h4>PDレジデンス</h4>
          <p>2024年10月 PDレジデンス開業予定</p>
          <p>PD（Parkinson’s Disease：パーキンソン病）患者さんに特化した、住宅型有料老人ホーム。自分の家のように過ごせる療養環境はもちろん、地域の大学病院や脳神経内科医と連携した、専門性の高い医療・診療体制を整えています。</p>
        </section>

        {/* Recruit Section */}
        <section id="recruit">
          <h2>Recruit</h2>
          <h3>看る人を見つめる。</h3>
          <p>一緒に働く仲間にも、善く生きる人生を送ってほしいから。 フィロソフィアでは、日々の暮らしにも幸せを感じながら、 胸を張って働ける訪問看護のあり方をつくっていきます。</p>
          <a href="#">採用について</a>
        </section>

        {/* News Section */}
        <section id="news">
          <h2>News</h2>
          <h3>お知らせ News</h3>
          <ul>
            <li>お知らせ 2025.02.13 株式会社サンウェルズ（PDハウス）の「不正な診療報酬の請求」に関する報道について</li>
            <li>お知らせ 2024.06.13 訪問看護医療DX情報活用加算に関して</li>
            <li>施設情報 2024.04.01 【PDレジデンス倉敷】工事進捗</li>
            <li>施設情報 2024.01.23 2024年10月　新施設の開業予定</li>
          </ul>
          <a href="#">一覧を見る</a>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>
          <h3>お問い合わせ</h3>
          <h4>Let’s talk</h4>
          <p>まずは、ご相談ください。</p>
          <p>私たちは看る人の「善く生きる」を叶える為に医療・介護サービスでサポートしています。訪問看護・介護から、採用に関することまで、お気軽にお問い合わせください。</p>
          <a href="#">お問い合わせ</a>
          <p>お電話でのお問い合わせ 06-6867-7651</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <nav>
          <ul>
            <li><a href="#">トップ</a></li>
            <li><a href="#">私たちの仕事</a></li>
            <li><a href="#">お知らせ</a></li>
            <li><a href="#">会社概要</a></li>
            <li><a href="#">採用について</a></li>
            <li><a href="#">採用にエントリー</a></li>
            <li><a href="#">お問い合わせ</a></li>
            <li><a href="#">プライバイシーポリシー</a></li>
          </ul>
        </nav>
        <div>
          <p>株式会社フィロソフィア</p>
          <p>〒540-0012 大阪市中央区谷町4丁目 5-9 谷町アークビル 1104 Tel:06-6867-7651</p>
        </div>
        <p>Copyright 2022 Philosophia Inc.</p>
        <div>
          <a href="#">instagram</a>
          <a href="#">x</a>
        </div>
      </footer>
    </div>
  );
}
