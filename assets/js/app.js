(function () {
  'use strict';

  /* ====== 配置 ====== */
  var petConfigs = {
    cat: {
      wrap: document.getElementById('catWrap'),
      svg: document.getElementById('catSvg'),
      bubble: document.getElementById('catBubble'),
      msgs: [
        '喵～你好呀！',
        '摸摸我嘛～',
        '想吃小鱼干🐟',
        '今天也要开心哦！',
        '喵呜～陪我玩！',
        '呼噜噜～好舒服',
        '嘿嘿，抓到你了！',
        '喵喵喵～',
        '给你比个心❤️',
        '好困呀…zzZ',
      ],
      specials: ['roll', 'head-tilt', 'yawn', 'paw-wave'],
      durations: { roll: 900, 'head-tilt': 2200, yawn: 2600, 'paw-wave': 2000 },
      sound: 'meow',
    },
    dog: {
      wrap: document.getElementById('dogWrap'),
      svg: document.getElementById('dogSvg'),
      bubble: document.getElementById('dogBubble'),
      msgs: [
        '汪汪！你好！',
        '摇尾巴～',
        '想出去玩！',
        '主人陪我玩～',
        '汪呜～',
        '骨头好香！',
        '好开心！',
        '汪汪汪！',
        '蹭蹭你～',
        '困了…zzZ',
      ],
      specials: ['tail-wag', 'bark', 'head-tilt', 'roll', 'yawn'],
      durations: {
        'tail-wag': 1500,
        bark: 800,
        'head-tilt': 2000,
        roll: 1000,
        yawn: 2600,
      },
      sound: 'woof',
    },
    goose: {
      wrap: document.getElementById('gooseWrap'),
      svg: document.getElementById('gooseSvg'),
      bubble: document.getElementById('gooseBubble'),
      msgs: [
        '嘎嘎～你好！',
        '扑扑翅膀～',
        '想吃玉米！',
        '嘎嘎嘎！',
        '好开心呀！',
        '游游泳～',
        '伸伸脖子～',
        '嘎～嘎～',
        '跟着你走！',
        '困了…zzZ',
      ],
      specials: ['wing-flap', 'waddle', 'head-tilt', 'quack', 'yawn'],
      durations: {
        'wing-flap': 1800,
        waddle: 2000,
        'head-tilt': 2000,
        quack: 600,
        yawn: 2600,
      },
      sound: 'gaga',
    },
    rabbit: {
      wrap: document.getElementById('rabbitWrap'),
      svg: document.getElementById('rabbitSvg'),
      bubble: document.getElementById('rabbitBubble'),
      msgs: [
        '蹦蹦～你好！',
        '耳朵动动～',
        '想吃胡萝卜🥕',
        '好可爱呀！',
        '跳跳跳！',
        '摸摸我的耳朵～',
        '兔兔最乖！',
        '给你爱心❤️',
        '好软呀～',
        '困了…zzZ',
      ],
      specials: ['ear-wiggle', 'hop', 'nose-wiggle', 'yawn'],
      durations: {
        'ear-wiggle': 1200,
        hop: 1000,
        'nose-wiggle': 800,
        yawn: 2600,
      },
      sound: 'rabbit',
    },
    fox: {
      wrap: document.getElementById('foxWrap'),
      svg: document.getElementById('foxSvg'),
      bubble: document.getElementById('foxBubble'),
      msgs: [
        '狐狸来了～',
        '尾巴摇摇～',
        '好狡猾哦！',
        '想捉迷藏！',
        '橙色的我！',
        '森林之王！',
        '聪明如我～',
        '给你爱心❤️',
        '好精神！',
        '困了…zzZ',
      ],
      specials: ['tail-sway', 'pounce', 'head-tilt', 'yawn'],
      durations: {
        'tail-sway': 2000,
        pounce: 1200,
        'head-tilt': 2000,
        yawn: 2600,
      },
      sound: 'fox',
    },
    pig: {
      wrap: document.getElementById('pigWrap'),
      svg: document.getElementById('pigSvg'),
      bubble: document.getElementById('pigBubble'),
      msgs: [
        '哼哼～你好！',
        '鼻子动动～',
        '想吃苹果🍎',
        '胖嘟嘟！',
        '呼噜呼噜～',
        '卷卷尾巴！',
        '粉色小猪！',
        '给你爱心❤️',
        '好可爱！',
        '困了…zzZ',
      ],
      specials: ['tail-curl', 'oink', 'wiggle', 'yawn'],
      durations: { 'tail-curl': 1500, oink: 600, wiggle: 1500, yawn: 2600 },
      sound: 'pig',
    },
    wolf: {
      wrap: document.getElementById('wolfWrap'),
      svg: document.getElementById('wolfSvg'),
      bubble: document.getElementById('wolfBubble'),
      msgs: [
        '嗷呜～',
        '仰天长啸！',
        '我是小狼！',
        '眼睛发光！',
        '想吃肉肉！',
        '森林猎手！',
        '团结就是力量！',
        '给你爱心❤️',
        '好威风！',
        '困了…zzZ',
      ],
      specials: ['howl', 'tail-wag', 'yawn'],
      durations: { howl: 2000, 'tail-wag': 1500, yawn: 2600 },
      sound: 'wolf',
    },
    lion: {
      wrap: document.getElementById('lionWrap'),
      svg: document.getElementById('lionSvg'),
      bubble: document.getElementById('lionBubble'),
      msgs: [
        '吼～我是狮子！',
        '鬃毛飘飘～',
        '森林之王！',
        '好威武！',
        '想吃牛排！',
        '金色毛发！',
        '百兽之王！',
        '给你爱心❤️',
        '好霸气！',
        '困了…zzZ',
      ],
      specials: ['roar', 'mane-shake', 'yawn'],
      durations: { roar: 1500, 'mane-shake': 1800, yawn: 2600 },
      sound: 'lion',
    },
    fish: {
      msgs: [
        '咕噜咕噜～',
        '吐泡泡～',
        '游来游去！',
        '水里的我！',
        '好清凉！',
        '鱼儿水中游！',
        '自由自在！',
        '给你爱心❤️',
        '好快乐！',
        '困了…zzZ',
      ],
      specials: ['bubble-blow'],
      durations: { 'bubble-blow': 2000 },
      sound: 'bubble',
    },
  };

  /* ====== 音频 ====== */
  var audioCtx = null;

  function playSound(type) {
    try {
      if (!audioCtx)
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      var t = audioCtx.currentTime;

      if (type === 'meow') {
        var o1 = audioCtx.createOscillator(),
          g1 = audioCtx.createGain();
        o1.type = 'sine';
        o1.frequency.setValueAtTime(650, t);
        o1.frequency.linearRampToValueAtTime(950, t + 0.08);
        o1.frequency.linearRampToValueAtTime(750, t + 0.18);
        o1.frequency.linearRampToValueAtTime(500, t + 0.35);
        o1.frequency.linearRampToValueAtTime(350, t + 0.55);
        g1.gain.setValueAtTime(0, t);
        g1.gain.linearRampToValueAtTime(0.25, t + 0.04);
        g1.gain.setValueAtTime(0.22, t + 0.25);
        g1.gain.linearRampToValueAtTime(0, t + 0.55);
        o1.connect(g1);
        g1.connect(audioCtx.destination);
        o1.start(t);
        o1.stop(t + 0.55);
      } else if (type === 'woof') {
        var o2 = audioCtx.createOscillator(),
          g2 = audioCtx.createGain();
        o2.type = 'square';
        o2.frequency.setValueAtTime(180, t);
        o2.frequency.linearRampToValueAtTime(220, t + 0.12);
        o2.frequency.linearRampToValueAtTime(160, t + 0.25);
        g2.gain.setValueAtTime(0, t);
        g2.gain.linearRampToValueAtTime(0.18, t + 0.02);
        g2.gain.setValueAtTime(0.15, t + 0.12);
        g2.gain.linearRampToValueAtTime(0, t + 0.28);
        o2.connect(g2);
        g2.connect(audioCtx.destination);
        o2.start(t);
        o2.stop(t + 0.28);

        var o3 = audioCtx.createOscillator(),
          g3 = audioCtx.createGain();
        o3.type = 'square';
        o3.frequency.setValueAtTime(200, t + 0.32);
        o3.frequency.linearRampToValueAtTime(240, t + 0.42);
        o3.frequency.linearRampToValueAtTime(170, t + 0.55);
        g3.gain.setValueAtTime(0, t + 0.32);
        g3.gain.linearRampToValueAtTime(0.16, t + 0.34);
        g3.gain.linearRampToValueAtTime(0, t + 0.58);
        o3.connect(g3);
        g3.connect(audioCtx.destination);
        o3.start(t + 0.32);
        o3.stop(t + 0.58);
      } else if (type === 'gaga') {
        for (var i = 0; i < 3; i++) {
          var o = audioCtx.createOscillator(),
            g = audioCtx.createGain();
          o.type = 'triangle';
          o.frequency.setValueAtTime(420, t + i * 0.18);
          o.frequency.linearRampToValueAtTime(380, t + i * 0.18 + 0.12);
          g.gain.setValueAtTime(0, t + i * 0.18);
          g.gain.linearRampToValueAtTime(0.12, t + i * 0.18 + 0.02);
          g.gain.linearRampToValueAtTime(0, t + i * 0.18 + 0.15);
          o.connect(g);
          g.connect(audioCtx.destination);
          o.start(t + i * 0.18);
          o.stop(t + i * 0.18 + 0.15);
        }
      } else if (type === 'rabbit') {
        for (var i = 0; i < 2; i++) {
          var o = audioCtx.createOscillator(),
            g = audioCtx.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(800 + i * 100, t + i * 0.15);
          o.frequency.linearRampToValueAtTime(600 + i * 80, t + i * 0.15 + 0.1);
          g.gain.setValueAtTime(0, t + i * 0.15);
          g.gain.linearRampToValueAtTime(0.1, t + i * 0.15 + 0.02);
          g.gain.linearRampToValueAtTime(0, t + i * 0.15 + 0.12);
          o.connect(g);
          g.connect(audioCtx.destination);
          o.start(t + i * 0.15);
          o.stop(t + i * 0.15 + 0.12);
        }
      } else if (type === 'fox') {
        var o = audioCtx.createOscillator(),
          g = audioCtx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(300, t);
        o.frequency.linearRampToValueAtTime(450, t + 0.15);
        o.frequency.linearRampToValueAtTime(350, t + 0.3);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.12, t + 0.03);
        g.gain.linearRampToValueAtTime(0, t + 0.35);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t);
        o.stop(t + 0.35);
      } else if (type === 'pig') {
        for (var i = 0; i < 3; i++) {
          var o = audioCtx.createOscillator(),
            g = audioCtx.createGain();
          o.type = 'sine';
          o.frequency.setValueAtTime(250, t + i * 0.2);
          o.frequency.linearRampToValueAtTime(200, t + i * 0.2 + 0.12);
          g.gain.setValueAtTime(0, t + i * 0.2);
          g.gain.linearRampToValueAtTime(0.15, t + i * 0.2 + 0.02);
          g.gain.linearRampToValueAtTime(0, t + i * 0.2 + 0.15);
          o.connect(g);
          g.connect(audioCtx.destination);
          o.start(t + i * 0.2);
          o.stop(t + i * 0.2 + 0.15);
        }
      } else if (type === 'wolf') {
        var o = audioCtx.createOscillator(),
          g = audioCtx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(200, t);
        o.frequency.linearRampToValueAtTime(350, t + 0.3);
        o.frequency.linearRampToValueAtTime(280, t + 0.6);
        o.frequency.linearRampToValueAtTime(200, t + 0.9);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.2, t + 0.1);
        g.gain.setValueAtTime(0.18, t + 0.5);
        g.gain.linearRampToValueAtTime(0, t + 0.9);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t);
        o.stop(t + 0.9);
      } else if (type === 'lion') {
        var o = audioCtx.createOscillator(),
          g = audioCtx.createGain();
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(150, t);
        o.frequency.linearRampToValueAtTime(200, t + 0.2);
        o.frequency.linearRampToValueAtTime(180, t + 0.4);
        o.frequency.linearRampToValueAtTime(120, t + 0.7);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.25, t + 0.1);
        g.gain.setValueAtTime(0.22, t + 0.4);
        g.gain.linearRampToValueAtTime(0, t + 0.7);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t);
        o.stop(t + 0.7);
      } else if (type === 'bubble') {
        var o = audioCtx.createOscillator(),
          g = audioCtx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(600, t);
        o.frequency.linearRampToValueAtTime(800, t + 0.1);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.08, t + 0.02);
        g.gain.linearRampToValueAtTime(0, t + 0.12);
        o.connect(g);
        g.connect(audioCtx.destination);
        o.start(t);
        o.stop(t + 0.12);
      }
    } catch (e) {}
  }

  /* ====== 气泡 ====== */
  function showBubble(bubbleEl, txt) {
    bubbleEl.textContent = txt;
    bubbleEl.classList.add('show');
    setTimeout(function () {
      bubbleEl.classList.remove('show');
    }, 3000);
  }

  /* ====== 爱心粒子 ====== */
  function spawnHearts(wrapEl) {
    var r = wrapEl.getBoundingClientRect();
    var cx = r.left + r.width / 2,
      cy = r.top + r.height / 2;
    var pool = ['❤️', '💕', '💖', '💗', '✨', '🌟'];
    for (var i = 0; i < 5; i++) {
      var el = document.createElement('div');
      el.className = 'heart';
      el.textContent = pool[Math.floor(Math.random() * pool.length)];
      el.style.left = cx + 'px';
      el.style.top = cy + 'px';
      el.style.fontSize = 12 + Math.random() * 8 + 'px';
      var dx = (Math.random() - 0.5) * 100,
        dy = -30 - Math.random() * 60;
      el.style.setProperty('--hx', dx * 0.6 + 'px');
      el.style.setProperty('--hy', dy + 'px');
      el.style.setProperty('--hx2', dx + 'px');
      el.style.setProperty('--hy2', dy - 25 + 'px');
      document.body.appendChild(el);
      setTimeout(
        (function (e) {
          return function () {
            e.remove();
          };
        })(el),
        900,
      );
    }
  }

  /* ====== Zzz 粒子 ====== */
  function spawnZzz(wrapEl) {
    for (var i = 0; i < 3; i++) {
      setTimeout(
        (function (idx) {
          return function () {
            var z = document.createElement('div');
            z.className = 'zzz';
            z.textContent = 'Z';
            z.style.right = '-10px';
            z.style.top = 15 + idx * 5 + 'px';
            z.style.fontSize = 10 + idx * 4 + 'px';
            wrapEl.appendChild(z);
            setTimeout(function () {
              z.remove();
            }, 1800);
          };
        })(i),
        i * 350,
      );
    }
  }

  /* ====== 为每个动物初始化 ====== */
  Object.keys(petConfigs).forEach(function (type) {
    var cfg = petConfigs[type];
    if (type === 'fish') return; // 小鱼单独处理

    var isSpecial = false;

    cfg.svg.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      cfg.svg.classList.remove('shake');
      void cfg.svg.offsetWidth;
      cfg.svg.classList.add('shake');
      setTimeout(function () {
        cfg.svg.classList.remove('shake');
      }, 460);

      playSound(cfg.sound);
      showBubble(
        cfg.bubble,
        cfg.msgs[Math.floor(Math.random() * cfg.msgs.length)],
      );
      spawnHearts(cfg.wrap);
    });

    function playSpecialAnim(animType) {
      if (isSpecial) return;
      isSpecial = true;
      cfg.wrap.classList.remove('idle');
      cfg.wrap.classList.add(animType);
      if (animType === 'yawn') spawnZzz(cfg.wrap);
      setTimeout(function () {
        cfg.wrap.classList.remove(animType);
        cfg.wrap.classList.add('idle');
        isSpecial = false;
      }, cfg.durations[animType]);
    }

    function scheduleSpecial() {
      var delay = 5000 + Math.random() * 7000;
      setTimeout(function () {
        playSpecialAnim(
          cfg.specials[Math.floor(Math.random() * cfg.specials.length)],
        );
        scheduleSpecial();
      }, delay);
    }

    scheduleSpecial();
  });

  /* ====== 小鱼单独处理 ====== */
  for (var i = 1; i <= 7; i++) {
    (function (idx) {
      var wrap = document.getElementById('fish' + idx + 'Wrap');
      var svg = document.getElementById('fish' + idx + 'Svg');
      var bubble = document.getElementById('fish' + idx + 'Bubble');
      var isSpecial = false;

      svg.addEventListener('pointerdown', function (e) {
        e.preventDefault();
        svg.classList.remove('shake');
        void svg.offsetWidth;
        svg.classList.add('shake');
        setTimeout(function () {
          svg.classList.remove('shake');
        }, 460);

        playSound('bubble');
        showBubble(
          bubble,
          petConfigs.fish.msgs[
            Math.floor(Math.random() * petConfigs.fish.msgs.length)
          ],
        );
        spawnHearts(wrap);
      });

      function playFishSpecial() {
        if (isSpecial) return;
        isSpecial = true;
        wrap.classList.add('bubble-blow');
        setTimeout(function () {
          wrap.classList.remove('bubble-blow');
          isSpecial = false;
        }, petConfigs.fish.durations['bubble-blow']);
      }

      function scheduleFishSpecial() {
        var delay = 4000 + Math.random() * 6000;
        setTimeout(function () {
          playFishSpecial();
          scheduleFishSpecial();
        }, delay);
      }

      scheduleFishSpecial();
    })(i);
  }
})();
