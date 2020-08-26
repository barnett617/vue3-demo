<template>
  <div class="other">
    <!-- figure 可附标题内容元素 -->
    <figure>
      <img :src="require('./images/elephant-660-480.jpg')" alt="">
      <figcaption>An elephant at sunset</figcaption>
    </figure>
    <figure>
      <figcaption>Get browser details using <code>navigator</code>.</figcaption>
      <!-- 预定义格式文本 -->
      <pre>
        function NavigatorExample() {
          var txt;
          txt += "Browser CodeName: " + navigator.appCodeName;
          txt += "Browser Name: " + navigator.appName;
          txt += "Browser Version: " + navigator.appVersion;
          txt += "Cookie Enabled: " + navigator.cookieEnabled;
          txt += "Platform: " + navigator.platform;
          txt += "User-agent header: " + navigator.userAgent;
          alert("txt", txt)
        }
        NavigatorExample()
      </pre>
    </figure>
    <figure>
      <!-- cite 引用 -->
      <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
      <blockquote>If debugging is the process of removing software bugs,
        then programming must be the process of putting them in.
      </blockquote>
    </figure>
    <blockquote>
      <p>Words can be like X-rays, if you use them properly—
        they’ll go through anything. You read and you’re pierced.</p>
      <footer>-Aldous Huxley, <cite>Brave New World</cite></footer>
    </blockquote>
    <figure>
      <p style="white-space:pre">
        Bid me discourse, I will enchant thine ear,
        Or like a fairy trip upon the green,
        Or, like a nymph, with long dishevell'd hair,
        Dance on the sands, and yet no footing seen:
        Love is a spirit all compact of fire,
        Not gross to sink, but light, and will aspire.
      </p>
      <figcaption><cite>Venus and Adonis</cite>,by William Shakespeare</figcaption>
    </figure>
  </div>
</template>

<style lang="stylus" scoped>
.other
  figure
    border thin #c0c0c0 solid
    display flex
    flex-flow column
    padding 5px
    max-width 220px
    margin 10px auto
    img
      max-width 220px
      max-height 150px
    figcaption
      background-color #222
      color #fff
      padding 3px
      text-align center
    pre
      padding 10px
      overflow-x auto
    p
      padding 10px
      overflow-x auto
  blockquote
    margin: 20px auto;
    max-width: 220px;
    p
      padding 15px
      background-color #eee
      border-radius 5px
    p::before
      content '\201C'
    p::after
      content '\201D'
</style>