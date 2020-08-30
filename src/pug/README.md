# Pug

## インデントで入れ子

class は 「.」, id は 「#」

```:index.pug
section
  p.title#title Pug Test
```

```:index.html
<section>
  <p class="title" id="title">Pug Test</p>
</section>

```

## 属性にはカッコ

```
a(href="#") リンク
label(for="hoge") ラベル
input(type="button" value="ボタン")
```

```
<a href="#">リンク</a>
<label for="hoge">ラベル</label>
<input id="btn" type="button" value="ボタン">
```

## 変数

var で宣言できる

```:index.pug
- var link = "https://google.com";
a(href=link) Google
```

```:index.html
<a href="https://google.com">Google</a>
```

## switch 文

case と when で

```:index.pug
- var text = "B";
case text
  when "A"
    p A
  when "B"
    p B
  default
    p default
```

```:index.html
<p>B</p>
```

## if 文

```:index.pug
- var text = 'hoge'
  if text === 'hoge'
    p hoge
  else
    p not hoge
```

```:index.html
<p>hoge</p
```

## for 文

```:index.pug
ul
  - for (var i = 0; i < 3; i++) {
    li リスト
  - }
```

```:index.html
<ul>
  <li>リスト</li>
  <li>リスト</li>
  <li>リスト</li>
</ul>
```

## include

ejs みたいに使いまわせる

```::footer.pug
footer
  span &copy; 2020 - Taiga
```

```::index.pug
include _includes/footer.pug
```

```::index.html
<footer><span>&copy; 2020 - Taiga</span></footer>
```

## コメントアウト

```:index.pug
//- コンパイル後表示されないコメント
// 表示されるコメント
```

```:index.html

// 表示されるコメント
```
