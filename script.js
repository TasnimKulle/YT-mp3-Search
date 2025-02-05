document
  .querySelector("#search-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    // console.log("search form.....")
    const data=[
        {
            "type": "video",
            "videoId": "gCNeDWCI0vo",
            "title": "🔴 Al Jazeera English | Live",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Stay Informed: Watch Al Jazeera English Live: @Al Jazeera English, we focus on people and events that affect people's lives.",
            "viewCount": "",
            "publishedText": "",
            "lengthText": "",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/gCNeDWCI0vo/hq720.jpg?v=640a78c8&sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmeSepmr1Fvjm4ZqaZ52BB954xqw",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/gCNeDWCI0vo/hq720.jpg?v=640a78c8&sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDL98ADu_DXPAuGqhztjA96UPYi-A",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": null,
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "oYcoGEYpTHA",
            "title": "‘Dead and wounded’ in attack near Ankara, Turkish minister says",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Turkey's interior minister says a number of people are dead and wounded after an attack on the premises of the Turkish ...",
            "viewCount": "193850",
            "publishedText": "4 days ago",
            "lengthText": "6:01",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/oYcoGEYpTHA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2Q4H0LqR4Rbj_hyzAhXFn_T1ULA",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/oYcoGEYpTHA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqRewXRkkPGCermqiCaqv8vb-ujw",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/oYcoGEYpTHA/mqdefault_6s.webp?du=3000&sqp=CMDB_LgG&rs=AOn4CLBhhtJqNZ8X8bcng8yKPE8rByo71w",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "wghDoDsarEk",
            "title": "Injuries after truck strikes bus stop in central Israel",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "At least 40 people have been injured some critically after a truck crashed into bus station in Glilot, north of Tel Aviv. There are ...",
            "viewCount": "183188",
            "publishedText": "21 hours ago",
            "lengthText": "12:41",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/wghDoDsarEk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv3n1yGp1nPBxw9cEEQG_m07Usuw",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/wghDoDsarEk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZN4pJ4L6poSy905uUW0iaaNeuQQ",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/wghDoDsarEk/mqdefault_6s.webp?du=3000&sqp=CJrk_LgG&rs=AOn4CLC7dIW0F0ct75OT9YFyBso6Ja48Ow",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "xvfhP630EjY",
            "title": "Iran’s Khamenei says ‘wrong’ to downplay Israel’s attack",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Iran's Supreme Leader Ayatollah Ali Khamenei made his first comments about the “malignant” Israeli attack on Iran early Saturday ...",
            "viewCount": "396073",
            "publishedText": "17 hours ago",
            "lengthText": "9:03",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/xvfhP630EjY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADxdk4AMb-Vq6_p_9yhUQk1czgrA",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/xvfhP630EjY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6mlGE-zc4wqoHAgw8AseyCb8CdQ",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/xvfhP630EjY/mqdefault_6s.webp?du=3000&sqp=COzR_LgG&rs=AOn4CLB1QNMVZTwpymr7TgY6ZfKf49LcnA",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "BNtKp9C0IUg",
            "title": "Israel expands its wars, but is it closer to ‘total victory’? | The Bottom Line",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Despite all the Israeli offensives of the past year – in Gaza, the West Bank, Lebanon and elsewhere – Palestinian politician ...",
            "viewCount": "20192",
            "publishedText": "11 hours ago",
            "lengthText": "24:02",
            "thumbnail": [
                {
                    "url": "https://i9.ytimg.com/vi/BNtKp9C0IUg/hq720_custom_1.jpg?sqp=CPDs_LgG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcUKuAe0SkUYK65m39pirt0AG_WA",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i9.ytimg.com/vi/BNtKp9C0IUg/hq720_custom_1.jpg?sqp=CPDs_LgG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClk0evAwXT6uoSrxbJI275iA5kYA",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/BNtKp9C0IUg/mqdefault_6s.webp?du=3000&sqp=CIDf_LgG&rs=AOn4CLB-AkddUjwUf7FcLSp2sBmKLnfB_A",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "lTxoFvVqDoo",
            "title": "How Israel Won the West | The Big Picture",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "The Big Picture: How Israel Won the West examines how Israel has come to occupy such a privileged and protected place in the ...",
            "viewCount": "195113",
            "publishedText": "2 days ago",
            "lengthText": "1:13:02",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/lTxoFvVqDoo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAByeuggi2r6Vw8WHj_gu6PwFHi7Q",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/lTxoFvVqDoo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCx0WcGsUOWawNty06qNa5Y8BzV7Q",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/lTxoFvVqDoo/mqdefault_6s.webp?du=3000&sqp=CMzU_LgG&rs=AOn4CLCpy8Sy0jU-kbiJx8gV7mjNvrk8lA",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "MBgIJfobagk",
            "title": "Israeli raid leaves north Gaza's Kamal Adwan Hospital in ruins | Al Jazeera Newsfeed",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Israeli soldiers have withdrawn after raiding Kamal Adwan Hospital in besieged northern Gaza, leaving catastrophic damage and ...",
            "viewCount": "24296",
            "publishedText": "17 hours ago",
            "lengthText": "1:43",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/MBgIJfobagk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB92E1Nu6LCEv4uB1vrun8I1sop4g",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/MBgIJfobagk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDm8LOsyXUx2nFCB8Iq5JjjP9aeOw",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/MBgIJfobagk/mqdefault_6s.webp?du=3000&sqp=CJPj_LgG&rs=AOn4CLBUvcmpAfk_iMUHoskJMXvOGMUB7Q",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "NqCS-R_avww",
            "title": "New tragedies unfolding in northern Gaza as the day progresses: AJE correspondent",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Israeli forces have killed at least 45 people in two separate attacks on residential buildings in Beit Lahiya, in northern Gaza.",
            "viewCount": "28265",
            "publishedText": "22 hours ago",
            "lengthText": "8:44",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/NqCS-R_avww/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3fZKhGM52vwaWN4_mX-77XesOAQ",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/NqCS-R_avww/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRva_oG4NOhOiu0UNaK6zykol41w",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/NqCS-R_avww/mqdefault_6s.webp?du=3000&sqp=CIDI_LgG&rs=AOn4CLAGlbBhG31sMSRFjut0Qd1Pq8sC3A",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "Iq6J7Q6L0yw",
            "title": "Israelism: The awakening of young American Jews | Featured Documentary",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "When two young American Jews raised to support Israel unconditionally witness the way Israel treats Palestinians, it changes ...",
            "viewCount": "263917",
            "publishedText": "3 days ago",
            "lengthText": "1:19:24",
            "thumbnail": [
                {
                    "url": "https://i9.ytimg.com/vi/Iq6J7Q6L0yw/hq720_custom_1.jpg?sqp=CPDs_LgG-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKyrenLo0Pct7bVAXd4gD8kFBFeA",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i9.ytimg.com/vi/Iq6J7Q6L0yw/hq720_custom_1.jpg?sqp=CPDs_LgG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAM-CM83esCYAbm8HWvcoaScQcjog",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/Iq6J7Q6L0yw/mqdefault_6s.webp?du=3000&sqp=CJza_LgG&rs=AOn4CLCH-TzftM_fUqxwBk3DPKCgYEYsTA",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "qSGa3tua86E",
            "title": "Will Iran respond to Israel's latest attack? | Inside Story",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Israel launched air strikes against several Iranian military targets early on Saturday. It said it was in response to what Israel called ...",
            "viewCount": "415900",
            "publishedText": "1 day ago",
            "lengthText": "27:26",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/qSGa3tua86E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbCjqBAuymJzpAWZYPCNDVw-I-Dg",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/qSGa3tua86E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAT6pgMiliSgdmIsaZJj9fV_6SvvQ",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/qSGa3tua86E/mqdefault_6s.webp?du=3000&sqp=CMTS_LgG&rs=AOn4CLCB9kbGDhG0xcYizlJ--biE6O3L-A",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "cv5EnR0olo8",
            "title": "New ‘horrific massacre’ by Israeli forces in north Gaza",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "The Health Ministry says one apartment block was destroyed in northern Gaza's Beit Lahiya town. Palestinians are trapped under ...",
            "viewCount": "92894",
            "publishedText": "1 day ago",
            "lengthText": "6:25",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/cv5EnR0olo8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAB_QJU34wyCLQNNsbnxsSqmWgBnA",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/cv5EnR0olo8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhCakMFirCKoZ2lJbsst4u-l-14Q",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/cv5EnR0olo8/mqdefault_6s.webp?du=3000&sqp=CLS__LgG&rs=AOn4CLCvGYFDrE_yvKBmq-VXX3vqd6fn1w",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "AxFVy-NPSnU",
            "title": "Israeli military confirms it has launched attacks on Iran",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "As we have been reporting, several loud explosions have been reported on the outskirts of Tehran. The Israeli military has now ...",
            "viewCount": "1876297",
            "publishedText": "2 days ago",
            "lengthText": "6:25",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/AxFVy-NPSnU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDQKHQqA2C0nYGrAm_ztN7N9u8fw",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/AxFVy-NPSnU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR_8S-_umJ35gzNKAxnBud7kc5lQ",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/AxFVy-NPSnU/mqdefault_6s.webp?du=3000&sqp=CLHa_LgG&rs=AOn4CLBP5ACcgduIWiGfJSCn-lJd0WRCMw",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "DJIv1r0uUyE",
            "title": "Israeli forces leave trail of destruction at Kamal Adwan Hospital",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Israeli forces have finally withdrawn from Kamal Adwan Hospital, also in the north– after laying siege to the facility on Friday.",
            "viewCount": "13168",
            "publishedText": "23 hours ago",
            "lengthText": "2:02",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/DJIv1r0uUyE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOhPArmx7xRkZbcdVLFhXz_JqJZg",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/DJIv1r0uUyE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbIj3ag0SN7ZZFJVy1KbowG_V9KA",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/DJIv1r0uUyE/mqdefault_6s.webp?du=3000&sqp=CNvV_LgG&rs=AOn4CLAycmavCCAToW6lfzfd3ygkLbNUQA",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "5QVh-5IX6n4",
            "title": "Local civilian fighter pushes back against Boko Haram's violence in northeast Nigeria",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "A growing number of locals are setting up self-styled civilian defence forces to push back against years of violence in Nigeria's ...",
            "viewCount": "4385",
            "publishedText": "20 hours ago",
            "lengthText": "1:58",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/5QVh-5IX6n4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIv8VGo5UQe4Ym4nOp190QV5-HJQ",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/5QVh-5IX6n4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAauA2-JlV7NWgypshzizJ-GgWIyw",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/5QVh-5IX6n4/mqdefault_6s.webp?du=3000&sqp=CILq_LgG&rs=AOn4CLDDMdfp7qAGJCZ-MB6IJaQUsW_98Q",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "_61YK9Dl3l4",
            "title": "Al Jazeera reveals UK, US involvement in Israel’s war on Gaza and Lebanon via 6,000 military flights",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "An Al Jazeera investigation has revealed the extent of military support the United Kingdom and United States have given Israel in ...",
            "viewCount": "213565",
            "publishedText": "4 days ago",
            "lengthText": "5:58",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/_61YK9Dl3l4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCc07ZqhF6WV1Z1VeQvigGRG63btA",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/_61YK9Dl3l4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwpGmyR78PE9VcGGRKkXO3HdiQxA",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/_61YK9Dl3l4/mqdefault_6s.webp?du=3000&sqp=COTp_LgG&rs=AOn4CLCQoTxLJLdaiXDfuPlWIgDZSj7Wiw",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "Sx1g73eqBvo",
            "title": "Israel’s direct strike on Iran marks ‘a new phase’: Analysis",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Israel's attack on Iran was part of a new phase in tensions as it was the first time Israel admitted to a direct strike on Iran, with ...",
            "viewCount": "76797",
            "publishedText": "1 day ago",
            "lengthText": "5:51",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/Sx1g73eqBvo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD21ejzWwKl4t-jTG9gAEGdgL8XkQ",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/Sx1g73eqBvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8VtgCjecIukX1_oMziM12TRqBEw",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/Sx1g73eqBvo/mqdefault_6s.webp?du=3000&sqp=CMSp_LgG&rs=AOn4CLASi--1oWnPo9fZ43G7RfbjCXGwGA",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "D62SJmQiKng",
            "title": "Israelis break into north Gaza as military’s deadly siege continues | Al Jazeera Newsfeed",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Israelis demanding new settlements in Gaza stormed the border fence as the Israeli military continued a siege of the area that has ...",
            "viewCount": "44055",
            "publishedText": "2 days ago",
            "lengthText": "2:08",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/D62SJmQiKng/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWP2lk9OK9pVxrCQKtPn5REapQGw",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/D62SJmQiKng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAXaJonDtcuUB5oxX9att4wbdzDQ",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/D62SJmQiKng/mqdefault_6s.webp?du=3000&sqp=CODl_LgG&rs=AOn4CLCPE3KLIRz9Igj8FScmO3kUk52TLw",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "1bMEh8Amj4E",
            "title": "US focuses on hostage release over ceasefire in Gaza: Former Egyptian official",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Hussein Haridy, Former Egyptian Assistant Foreign Minister and former Egyptian Ambassador to Spain and Pakistan, joins Al ...",
            "viewCount": "29705",
            "publishedText": "2 days ago",
            "lengthText": "5:38",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/1bMEh8Amj4E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_hgOPZmoi5h36gEsu6TrodDQKgQ",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/1bMEh8Amj4E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpG1O4gdBOvL44d0U362FCLhDuMQ",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/1bMEh8Amj4E/mqdefault_6s.webp?du=3000&sqp=CIfO_LgG&rs=AOn4CLA1oXSqKBTKB_9GHHXDjJyVMrEmMg",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "P_10vrxRHK8",
            "title": "Israeli air strikes pound southern Beirut’s suburb",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "At least two Israeli missile strikes hit Beirut's southern suburbs with footage showing smoke rising from the area after Israel issued ...",
            "viewCount": "48654",
            "publishedText": "2 days ago",
            "lengthText": "3:22",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/P_10vrxRHK8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBImadtws-vyuOO9cHQtb-DYY9URg",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/P_10vrxRHK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJ_ICvWMsHMtuZPpwJE2dzbsqtZg",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/P_10vrxRHK8/mqdefault_6s.webp?du=3000&sqp=CJPU_LgG&rs=AOn4CLCww6o055mJD5vHTj7b8lWOZjeHlA",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        },
        {
            "type": "video",
            "videoId": "pA8FHrcR49k",
            "title": "'The US says this should be the end of military fire between Israel and Iran': AJE correspondent",
            "channelTitle": "Al Jazeera English",
            "channelId": "UCNye-wNBqNL5ZzHSJj3l8Bg",
            "description": "Al Jazeera's Heidi Zhou-Castro reports from Washington, D.C., as US Defense Secretary speaks with Israeli Defense Minister ...",
            "viewCount": "33644",
            "publishedText": "1 day ago",
            "lengthText": "2:13",
            "thumbnail": [
                {
                    "url": "https://i.ytimg.com/vi/pA8FHrcR49k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQDEJf4Mm31KKMyHlQbeG-qWxj5w",
                    "width": 360,
                    "height": 202
                },
                {
                    "url": "https://i.ytimg.com/vi/pA8FHrcR49k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGwiMn5R2wDcQAUxh9yjhIf9vkAw",
                    "width": 720,
                    "height": 404
                }
            ],
            "richThumbnail": [
                {
                    "url": "https://i.ytimg.com/an_webp/pA8FHrcR49k/mqdefault_6s.webp?du=3000&sqp=CN_d_LgG&rs=AOn4CLB1bSPsw3bYmtp4DpNYk0UHe6Y6EQ",
                    "width": 320,
                    "height": 180
                }
            ],
            "channelThumbnail": [
                {
                    "url": "https://yt3.ggpht.com/3fbjZ6CAJl7Y7ii8qo0C4VEd_zcsC3-zrB0Nw5MW--VZmga15wtwwTBmePBRAPl3vCSFRoQq1Q=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }
            ]
        }
    ]
    const query = document.querySelector("#search-input").value;
    // console.log("query is" ,query)
    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&type=video`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c52554a1d6mshca06cffbbef74a0p172932jsn29ccd0d52c71",
        "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };

    try {
    //   const reponse = await fetch(url, options);
    //   const result = await reponse.json();
    //   console.log(result.data);
      displayVideo(data);
    } catch (error) {
      console.error("error fetching result searching.....");
    }
  });
function displayVideo(videos) {
  const videoList = document.querySelector(".video-list");
  videoList.innerHTML = "";
  videos.forEach(video => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.innerHTML = `
        <div class="video-thambnail" style="background-image:url('${video.thumbnail[0].url}'); width: 320px; height: 300px;"></div>
        <div class="video-info">
            <div class="video-title">${video.title}</div>
            <div class="video-channel">${video.channelTitle}</div>
        </div>
        `;
        videoItem.addEventListener("click",()=> openModel(video.videoId))
    videoList.appendChild(videoItem);
  });
}

function openModel(videoId){
    const model=document.querySelector("#video-model");
    const videoPlayer= document.querySelector("#video-player")
    const videoUrl=`https://www.youtube.com/embed/${videoId}`;
    videoPlayer.src=videoUrl;
    model.style.display = "block"
}