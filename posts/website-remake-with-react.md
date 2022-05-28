---
title: 'ウェブサイトをNext.jsで作り直しました'
createdAt: '2022-05-28'
updatedAt: '2022-05-28'
---

こんにちは、[ひらたけ](https://twitter.com/Hirotaisou2012) です。

本日、私のウェブサイトを、 [Nuxt.js](https://nuxtjs.org/) で作っていたものから [Next.js](https://nextjs.org/) で作り直したものにリニューアルいたしました。  
デザインなどは、一部細かい調整とはしていますが特に大きく変えていません。

<!--more-->

[React](https://ja.reactjs.org/) や [TypeScript](https://www.typescriptlang.org/) の勉強のために進めていたのですが、コードの書き方が大きく異なりなかなか苦戦しました。

また、一応仕事でマークアップエンジニアをやっているので、勉強のため [Emotion](https://emotion.sh/docs/introduction) という CSS-in-JS のライブラリを試してみました。BEMとかSMACSSとか、VueのSFCとも書き方や扱いが異なり、慣れるまで大変だなというお気持ち。  
JavaScript側の変数の値をCSS内で扱えるのは非常に便利ではあるものの、マークアップのコードとスタイリングのコードが混在してなんだかゴチャゴチャとしてしまうので、より良い記述方法を模索していく必要がありそう。

ソースコードは [GitHub](https://github.com/Hiratake/hiratake-web) に置いてますが、かなりコードが汚い感じになってしまいました。  
勉強中で慣れておらず、「とりあえず、まずは動くものを」という方針で進めていたので、時間を作って少しずつリファクタリングをしていきたいと思っています。  
なにかお気づきの点がありましたら、 [Issue](https://github.com/Hiratake/hiratake-web/issues) などいただけますと助かります。

どうぞよろしくおねがいいたします。
