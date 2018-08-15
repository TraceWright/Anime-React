import React from 'react';
import Anime from 'react-anime';

const Svg = () => (
    <div className="svg-wrapper">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="-100 -200 800 720">
    <Anime easing="easeOutQuad"
          duration={800}
          loop={false}
          delay={(el, index) => index * 200}
          strokeDashoffset={ (el) => {
                 var pathLength = 0;
               if (el.getTotalLength) {
                 pathLength = el.getTotalLength();
                 el.setAttribute('stroke-dasharray', pathLength);
                           }
             return [pathLength, 0];
             }}>


            <path className="stroke white" d="M360 696 c0 -168 -2 -185 -20 -209 -26 -33 -59 -40 -109 -22 l-41 14
            0 -74 c0 -42 5 -77 11 -80 6 -4 36 -9 68 -12 120 -11 224 48 250 144 6 21 11
            125 11 231 l0 192 -85 0 -85 0 0 -184z"/>
            <path className="stroke white" d="M730 724 c-14 -3 -40 -10 -57 -15 -32 -10 -33 -13 -33 -63 l0 -53 61
            20 c67 22 131 16 137 -14 2 -12 -14 -18 -74 -27 -42 -7 -89 -20 -105 -29 -77
            -46 -76 -178 2 -218 45 -24 112 -15 148 19 27 26 42 33 40 19 -6 -39 0 -43 78
            -43 l76 0 -6 150 c-6 168 -16 199 -76 234 -33 19 -138 30 -191 20z"/>
            <path className="stroke white" d="M1098 520 l67 -201 99 3 99 3 68 195 c38 107 69 196 69 198 0 1 -38
            2 -85 2 -79 0 -85 -1 -90 -22 -3 -13 -16 -74 -29 -136 -13 -63 -26 -115 -28
            -118 -3 -2 -18 58 -34 133 l-29 138 -87 3 -87 3 67 -201z"/>
            <path className="stroke white" d="M1615 717 c-50 -12 -50 -12 -55 -59 -3 -25 -4 -50 -3 -55 2 -5 31 0
            64 10 67 22 131 16 137 -14 2 -12 -13 -18 -73 -27 -42 -7 -89 -19 -105 -27
            -77 -40 -82 -170 -8 -215 55 -33 113 -25 166 23 l22 20 0 -26 c0 -27 0 -27 78
            -27 l77 0 -5 158 c-6 175 -13 197 -73 228 -41 22 -156 27 -222 11z"/>
            <path className="stroke white" d="M2110 871 c-70 -25 -117 -76 -126 -137 -13 -86 49 -160 166 -199 62
            -21 86 -46 70 -74 -17 -33 -86 -31 -173 4 l-58 23 3 -76 3 -77 55 -13 c127
            -30 284 3 332 71 29 41 36 123 14 166 -19 37 -85 81 -157 107 -61 22 -88 48
            -73 72 21 32 94 32 199 -3 19 -6 20 -2 17 64 -3 52 -8 71 -20 76 -8 3 -56 8
            -106 11 -74 4 -101 1 -146 -15z"/>
            <path className="stroke white" d="M2598 715 c-87 -28 -138 -102 -138 -197 1 -97 52 -169 144 -198 39
            -13 162 -10 185 4 6 4 11 33 11 68 0 53 -2 59 -17 53 -60 -23 -123 -11 -143
            26 -16 29 -11 85 9 110 16 20 28 24 68 23 26 -1 57 -4 67 -5 18 -4 19 2 17 56
            -2 33 -4 62 -7 64 -12 12 -154 9 -196 -4z"/>
            <path className="stroke white" d="M3104 716 c-17 -8 -39 -24 -48 -37 l-16 -23 0 32 0 32 -85 0 -85 0 0
            -200 0 -200 85 0 85 0 0 110 c0 106 1 112 26 137 21 21 32 25 65 20 l39 -5 0
            74 c0 82 -5 86 -66 60z"/>
            <path className="stroke white" d="M3220 520 l0 -200 85 0 85 0 0 200 0 200 -85 0 -85 0 0 -200z"/>
            <path className="stroke white" d="M3270 896 c-67 -22 -79 -100 -20 -131 69 -36 140 -3 140 65 0 20 -6
            43 -14 49 -26 22 -70 29 -106 17z"/>
            <path className="stroke white" d="M3695 714 c-16 -8 -38 -23 -47 -31 -17 -15 -18 -14 -18 10 0 27 0 27
            -80 27 l-80 0 0 -290 0 -290 80 0 80 0 0 111 0 110 26 -20 c91 -71 226 -7 254
            122 16 69 6 155 -23 199 -42 62 -128 85 -192 52z m35 -124 c49 -49 7 -172 -54
            -156 -47 12 -63 102 -25 150 24 31 52 33 79 6z"/>
            <path className="stroke white" d="M4091 820 c-35 -11 -65 -21 -67 -22 -2 -2 -4 -20 -6 -41 -2 -35 -4
            -37 -35 -37 l-33 0 0 -54 c0 -54 0 -55 33 -58 l32 -3 5 -111 c4 -93 8 -116 25
            -134 38 -43 106 -59 184 -44 30 6 31 7 31 65 l0 58 -28 -5 c-43 -9 -53 12 -50
            98 l3 73 38 3 37 3 0 55 0 54 -40 0 -40 0 0 60 c0 68 3 67 -89 40z"/>
            <path className="stroke pink" d="M4777 662 l-188 -77 3 -49 3 -49 185 -77 c102 -42 187 -76 190 -74 3
            1 4 26 2 56 l-4 54 -130 43 c-71 24 -126 47 -121 51 4 4 60 24 123 45 63 21
            119 41 123 45 5 4 7 30 5 58 l-3 51 -188 -77z"/>
            <path className="stroke pink" d="M5180 877 l-45 -13 -3 -63 c-3 -58 -1 -63 15 -56 10 4 39 13 65 18
            38 9 50 8 72 -6 55 -37 16 -87 -66 -87 l-48 0 0 -59 0 -58 56 -7 c31 -3 64
            -11 74 -16 29 -16 32 -49 5 -76 -28 -28 -69 -31 -138 -10 l-47 14 0 -63 0 -63
            50 -11 c118 -25 228 -4 279 54 66 75 48 187 -36 222 l-36 14 31 19 c45 27 64
            62 64 116 0 53 -21 89 -70 117 -40 24 -161 31 -222 14z"/>

            {/* <path className="st1" d="M180 1605 l0 -65 75 0 75 0 0 -215 0 -215 85 0 85 0 0 215 0 215 80
            0 80 0 0 65 0 65 -240 0 -240 0 0 -65z"/>
            <path className="st1" d="M950 1509 c-14 -5 -35 -22 -47 -37 l-23 -27 0 33 0 33 -80 -3 -81 -3
            0 -195 0 -195 81 -3 80 -3 0 101 c0 143 24 181 103 166 l32 -6 -3 75 c-4 81
            -8 85 -62 64z"/>
            <path className="st1" d="M1175 1513 c-100 -23 -95 -19 -95 -77 l0 -53 53 18 c28 10 66 18 82
            19 30 0 75 -23 75 -39 0 -4 -36 -13 -81 -19 -92 -13 -134 -37 -156 -90 -54
            -129 107 -231 207 -130 l30 30 0 -31 0 -31 75 0 75 0 0 128 c0 70 -5 144 -9
            166 -12 48 -51 90 -100 105 -38 11 -117 13 -156 4z"/>
             <path className="st1" d="M1637 1505 c-59 -22 -98 -54 -118 -99 -22 -49 -25 -143 -5 -189 18
            -44 77 -94 128 -108 41 -11 167 -7 188 6 6 3 10 33 10 66 0 58 -1 60 -22 52
            -45 -16 -107 -9 -130 15 -31 30 -31 94 0 124 23 24 85 31 130 15 21 -8 22 -6
            22 56 0 64 0 65 -31 71 -51 10 -131 6 -172 -9z"/>
            <path className="st1" d="M2038 1510 c-84 -25 -135 -91 -145 -185 -17 -165 118 -257 317 -214
            l50 11 0 53 0 54 -32 -10 c-45 -12 -115 -11 -141 2 -52 28 -38 34 86 39 l122
            5 3 30 c7 54 -17 133 -51 169 -47 49 -135 69 -209 46z"/>
            <path className="st1" d="M2319 1488 c5 -13 43 -102 84 -199 69 -165 73 -179 61 -207 -14 -35
            -55 -49 -97 -33 l-27 11 0 -61 c0 -70 4 -73 96 -74 77 0 128 31 166 102 23 41
            178 458 178 477 0 3 -35 6 -79 6 l-79 0 -27 -117 c-16 -65 -31 -121 -35 -126
            -3 -4 -20 49 -36 118 l-29 125 -92 0 c-92 0 -92 0 -84 -22z"/>

            <path className="st1" d="M3010 1661 c0 -9 117 -503 126 -533 5 -16 19 -18 99 -18 l95 0 6 28
            c37 145 93 343 93 328 1 -10 19 -94 42 -187 l41 -169 88 0 89 0 10 38 c42 163
            131 514 131 518 0 2 -37 4 -83 4 l-83 0 -23 -172 c-13 -95 -27 -180 -32 -188
            -7 -12 -8 -11 -8 5 -1 11 -17 95 -37 188 l-37 167 -91 0 -91 0 -51 -192 -51
            -191 -17 129 c-9 71 -22 157 -27 192 l-11 62 -89 0 c-49 0 -89 -4 -89 -9z"/>
            <path className="st1" d="M4114 1506 c-17 -8 -39 -24 -48 -37 l-16 -23 0 32 0 32 -85 0 -85 0
            0 -200 0 -200 85 0 85 0 0 110 c0 106 1 112 26 137 21 21 32 25 65 20 l40 -5
            -3 71 c-3 80 -10 86 -64 63z"/>
            <path className="st1" d="M4230 1310 l0 -200 85 0 85 0 0 200 0 200 -85 0 -85 0 0 -200z"/>

            <path className="st1" d="M4245 1665 c-45 -44 -23 -109 40 -121 72 -13 115 15 115 76 0 49 -27
            70 -88 70 -32 0 -49 -6 -67 -25z"/>
            <path className="st1" d="M4580 1509 c-77 -32 -126 -129 -117 -229 10 -118 61 -174 158 -175
            45 0 64 5 89 23 36 27 44 25 35 -11 -16 -62 -107 -94 -190 -67 -28 9 -39 10
            -45 1 -9 -16 -1 -103 11 -116 6 -5 54 -10 108 -10 89 0 103 3 157 30 44 23 65
            42 89 79 l30 49 3 214 3 214 -83 -3 c-60 -2 -82 -6 -80 -15 3 -18 -8 -16 -30
            3 -22 20 -103 28 -138 13z m144 -125 c33 -33 33 -109 -1 -146 -37 -42 -93 -4
            -93 63 0 81 51 126 94 83z"/>
            <path className="st1" d="M4990 1405 l0 -295 85 0 85 0 0 135 0 135 26 12 c23 11 29 10 45 -11
            16 -20 19 -41 19 -147 l0 -124 81 0 81 0 -4 158 c-3 128 -7 163 -21 190 -35
            64 -131 79 -197 32 l-30 -21 0 115 0 116 -85 0 -85 0 0 -295z"/>
            <path className="st1" d="M5645 1625 c-5 -2 -36 -11 -67 -20 -58 -16 -58 -16 -58 -56 0 -37 -2
            -39 -30 -39 -30 0 -30 0 -30 -58 0 -56 1 -58 28 -57 l27 0 5 -106 c4 -79 10
            -112 23 -133 31 -47 103 -66 186 -50 30 6 31 8 31 64 0 55 -1 57 -23 53 -42
            -8 -57 20 -57 103 l0 74 40 0 40 0 0 45 c0 25 1 48 3 53 1 4 -17 8 -40 10
            l-43 3 0 60 c0 58 -5 65 -35 54z"/>
            <path className="st1" d="M1749 566 c-2 -3 -17 -7 -33 -10 -44 -8 -73 -32 -80 -67 -3 -18 -4
            -34 -2 -37 3 -2 28 10 56 27 59 36 110 51 110 31 0 -7 -25 -42 -56 -79 -71
            -82 -81 -103 -66 -136 6 -14 17 -25 24 -25 7 0 41 30 76 68 48 51 61 60 53 39
            -15 -39 -13 -78 5 -102 13 -18 16 -18 42 -3 55 32 168 236 144 260 -11 11 -31
            -12 -37 -40 -6 -33 -41 -95 -80 -139 -72 -84 -75 -41 -5 75 28 46 50 90 50 98
            0 33 -33 9 -111 -82 -75 -86 -114 -122 -124 -112 -2 2 23 37 56 78 53 67 59
            79 57 115 -3 38 -5 40 -38 43 -20 2 -38 1 -41 -2z"/>

            <path className="st1" d="M2273 567 c-47 -35 -103 -106 -129 -164 -24 -54 -61 -87 -90 -81 -32
            6 -25 27 15 47 45 23 69 57 53 73 -28 28 -132 -49 -132 -98 0 -67 47 -83 103
            -35 l33 30 11 -30 c13 -34 31 -37 66 -9 14 11 34 20 45 20 11 0 25 6 31 14 10
            12 8 13 -10 9 -19 -5 -21 -3 -14 13 14 35 17 64 7 64 -19 0 -52 -43 -52 -66 0
            -12 -7 -25 -16 -28 -52 -20 -44 15 19 88 69 79 94 116 102 149 9 33 -2 34 -42
            4z"/>

            <path className="st1" d="M2515 567 c-49 -17 -88 -36 -97 -51 -11 -16 -10 -56 1 -56 19 0 41
            12 36 21 -4 6 81 39 102 39 1 0 -22 -36 -52 -80 -53 -78 -76 -132 -67 -158 6
            -17 52 -15 109 4 144 49 216 176 145 255 -24 27 -37 33 -83 35 -30 2 -72 -2
            -94 -9z m155 -65 c48 -39 18 -109 -63 -151 -55 -28 -137 -40 -137 -20 0 7 24
            52 53 101 50 84 53 87 88 88 21 0 46 -8 59 -18z"/>
              <path className="st1" d="M3253 528 c-33 -35 -83 -125 -83 -151 0 -19 -64 -60 -87 -55 -30 6
            -25 27 9 41 43 18 68 43 68 69 0 18 -4 20 -32 14 -33 -7 -98 -61 -98 -82 0
            -12 -29 -28 -37 -20 -3 2 3 18 11 35 18 34 21 61 7 61 -11 0 -51 -53 -51 -67
            0 -11 -43 -53 -53 -53 -15 0 -5 34 18 62 14 16 25 36 25 44 0 23 -28 16 -47
            -13 -38 -56 -82 -95 -104 -91 -37 5 -33 26 10 47 45 23 69 57 53 73 -29 29
            -132 -47 -132 -96 0 -68 45 -86 100 -40 17 15 32 25 34 23 2 -2 9 -14 15 -26
            14 -28 25 -29 59 -4 15 10 41 21 57 24 25 5 33 2 40 -16 14 -31 45 -32 88 -2
            46 30 45 30 49 3 4 -33 39 -34 68 -3 29 31 34 31 48 0 14 -30 38 -32 72 -5 14
            11 30 20 37 20 6 0 33 24 59 53 l47 52 -34 -60 c-77 -139 -95 -185 -71 -185 9
            0 23 24 46 82 14 36 15 37 51 27 44 -12 65 -6 96 28 21 23 22 25 4 18 -57 -22
            -60 -20 -28 21 56 70 45 104 -20 60 -45 -31 -48 -19 -7 27 31 35 38 57 20 57
            -12 0 -35 -24 -100 -104 -46 -56 -82 -77 -59 -35 14 28 3 89 -17 89 -30 0 -75
            -31 -99 -70 -26 -41 -59 -65 -75 -55 -18 11 -10 44 19 77 50 58 90 158 63 158
            -4 0 -22 -15 -39 -32z"/>

            <path className="st1" d="M3681 428 c-18 -13 -41 -36 -51 -53 -17 -27 -17 -34 -5 -62 10 -25
            20 -33 39 -33 22 0 92 49 126 89 16 19 50 35 50 23 0 -4 -7 -16 -15 -26 -20
            -26 -19 -75 1 -83 9 -3 27 6 45 23 31 30 41 58 11 31 -45 -40 -55 -9 -17 47
            29 43 24 60 -16 54 -16 -3 -30 0 -32 6 -8 21 -49 -27 -44 -51 8 -41 -97 -95
            -110 -56 -3 7 14 21 36 32 41 22 67 54 56 71 -10 16 -40 11 -74 -12z"/>

             <path className="st1" d="M4198 585 c-32 -18 -58 -63 -58 -99 0 -17 -10 -31 -34 -45 -64 -40
            -71 -119 -13 -151 25 -14 31 -13 69 8 41 22 43 22 56 5 13 -17 14 -17 33 6 23
            28 24 41 4 41 -20 0 -19 7 5 37 11 14 20 34 20 45 0 17 -3 17 -34 -7 -34 -26
            -35 -26 -45 -6 -17 32 -12 44 32 76 35 26 42 36 42 65 0 30 -4 35 -25 37 -14
            2 -37 -4 -52 -12z"/>

            <path className="st1" d="M4565 545 c-80 -29 -114 -110 -57 -138 15 -8 44 -17 64 -21 20 -4 47
            -15 59 -25 l22 -18 -42 -16 c-45 -19 -166 -24 -156 -7 10 16 -12 12 -29 -6
            -41 -40 -1 -69 88 -62 90 8 166 52 166 97 0 21 -46 52 -104 70 -33 10 -62 23
            -64 29 -6 18 56 43 117 49 52 4 55 3 37 -11 -25 -20 -18 -20 28 -1 32 13 37
            20 34 43 -3 26 -6 27 -63 29 -33 2 -78 -4 -100 -12z"/>
            <path className="st1" d="M5388 490 c-8 -12 -24 -20 -38 -20 -28 0 -50 -16 -50 -37 0 -7 7 -13
            15 -13 8 0 15 -4 15 -9 0 -15 -90 -92 -100 -86 -11 7 12 59 30 70 14 9 13 55
            -2 55 -6 0 -36 -25 -65 -55 -52 -53 -73 -58 -33 -8 24 30 25 43 5 43 -8 0 -25
            -16 -39 -36 -42 -62 -106 -93 -120 -59 -4 10 5 19 27 29 43 17 67 42 67 68 0
            18 -4 20 -32 14 -33 -7 -98 -61 -98 -82 0 -14 -43 -44 -65 -44 -23 0 -18 34
            10 60 27 26 33 60 11 60 -17 0 -66 -56 -66 -76 0 -18 -58 -54 -88 -54 -36 0
            -40 30 -7 58 19 16 31 20 33 13 7 -20 42 19 42 46 0 28 -13 29 -56 2 -60 -36
            -80 -90 -54 -140 15 -27 40 -24 87 11 39 28 41 29 46 10 8 -31 35 -35 68 -11
            l30 22 18 -22 c22 -27 55 -21 100 17 29 24 31 25 31 5 0 -36 18 -32 55 14 45
            54 60 58 35 9 -35 -68 -3 -85 56 -29 20 19 37 35 38 35 1 0 0 -18 -2 -40 -4
            -34 -1 -40 15 -40 10 0 35 13 54 30 l36 29 11 -24 c14 -31 33 -32 69 -1 l28
            24 23 -25 c28 -31 63 -25 107 18 38 36 46 37 36 2 -17 -62 14 -70 74 -19 22
            19 37 38 33 42 -5 4 -16 0 -26 -9 -25 -23 -42 -21 -42 3 0 34 29 80 50 80 23
            0 55 41 39 51 -8 5 -8 8 0 13 16 10 14 26 -4 26 -8 0 -20 -9 -27 -20 -8 -12
            -24 -20 -38 -20 -28 0 -50 -16 -50 -37 0 -7 7 -13 15 -13 23 0 18 -13 -17 -47
            -59 -56 -98 -64 -129 -27 -10 12 -8 19 11 39 13 14 27 25 32 25 12 0 10 -38
            -3 -62 -16 -29 9 -19 34 14 15 20 18 34 12 67 -7 43 -29 55 -40 22 -8 -25
            -120 -131 -139 -131 -24 0 -29 19 -12 43 9 12 23 32 32 45 9 12 14 25 11 28
            -13 13 -47 -9 -69 -44 -40 -65 -88 -93 -88 -51 0 31 32 79 52 79 22 0 52 41
            37 51 -8 5 -8 8 0 13 16 10 14 26 -4 26 -8 0 -20 -9 -27 -20z"/>
             */}

             {/* <path className="st1" d="M230 815 l0 -65 75 0 75 0 0 -215 0 -215 85 0 85 0 0 215 0 215 80 0
              80 0 0 65 0 65 -240 0 -240 0 0 -65z"/>
              <path className="st1" d="M994 716 c-17 -8 -39 -24 -48 -37 l-16 -23 0 32 0 32 -85 0 -85 0 0
              -200 0 -200 85 0 85 0 0 110 c0 106 1 112 26 137 21 21 32 25 65 20 l39 -5 0
              74 c0 82 -5 86 -66 60z"/>
              <path className="st1" d="M1185 717 l-50 -12 -3 -54 c-3 -52 -2 -53 20 -47 76 22 124 28 151
              17 48 -19 33 -38 -35 -46 -85 -9 -143 -36 -162 -74 -18 -34 -21 -87 -6 -125
              26 -69 142 -87 200 -31 l30 29 0 -28 0 -27 76 3 76 3 -1 145 c-2 174 -12 203
              -81 238 -50 25 -130 28 -215 9z"/>
              <path className="st1" d="M1705 721 c-83 -21 -137 -74 -155 -156 -21 -92 16 -182 90 -224 51
              -28 146 -38 208 -22 l42 12 0 60 c0 58 -1 60 -22 52 -13 -4 -43 -8 -67 -8 -35
              1 -48 6 -67 28 -13 16 -24 41 -24 57 0 16 11 41 24 57 19 22 32 27 67 28 24 0
              54 -4 67 -8 21 -8 22 -6 22 56 0 64 0 65 -31 71 -40 8 -115 6 -154 -3z"/>
              <path className="st1" d="M2076 716 c-57 -22 -87 -47 -114 -97 -33 -61 -29 -168 8 -222 42 -61
              91 -82 190 -82 125 0 137 5 142 60 4 60 2 66 -28 54 -61 -23 -174 -2 -174 32
              0 5 51 9 120 9 l120 0 0 62 c0 77 -28 139 -76 169 -45 27 -135 34 -188 15z"/>
              <path className="st1" d="M2363 708 c3 -7 39 -96 82 -196 82 -197 86 -218 39 -248 -20 -14 -32
              -15 -60 -6 l-34 10 0 -59 c0 -70 5 -74 95 -74 78 0 130 33 171 109 13 23 174
              462 174 473 0 2 -36 3 -80 3 l-79 0 -10 -37 c-6 -21 -19 -76 -30 -122 -11 -46
              -22 -85 -24 -88 -3 -2 -14 36 -26 84 -12 48 -26 105 -32 126 l-10 37 -90 0
              c-69 0 -90 -3 -86 -12z"/>
              <path className="st1" d="M3059 873 c0 -5 28 -131 63 -280 l63 -273 96 0 95 0 50 190 c47 183
              49 188 55 142 6 -40 29 -140 70 -294 l10 -38 88 0 88 0 68 268 c37 147 70 273
              72 280 4 9 -16 12 -79 12 l-85 0 -28 -191 -29 -192 -22 109 c-13 60 -31 146
              -40 192 l-17 82 -92 0 -93 0 -21 -77 c-11 -43 -34 -130 -50 -193 -17 -63 -30
              -110 -31 -103 0 6 -11 88 -25 183 -14 95 -25 176 -25 181 0 11 -180 12 -181 2z"/>

              <path className="st1" d="M4173 723 c-12 -2 -36 -19 -53 -36 -27 -27 -31 -29 -30 -12 5 44 3
              45 -80 45 l-80 0 0 -200 0 -200 80 0 80 0 0 94 c0 51 5 107 11 124 12 36 56
              57 99 48 l31 -6 -3 73 c-3 76 -6 80 -55 70z"/>
                <path className="st1" d="M4280 520 l0 -201 83 3 c45 2 81 6 80 11 -2 4 -3 93 -3 197 l0 190
              -80 0 -80 0 0 -200z"/>
              <path className="st1" d="M4614 711 c-71 -32 -105 -97 -105 -203 -1 -113 53 -185 144 -195 37
              -4 55 0 91 20 44 25 46 25 46 6 0 -74 -111 -114 -205 -75 l-35 15 0 -64 c0
              -62 1 -65 28 -72 15 -4 63 -8 107 -7 117 1 201 42 243 119 14 24 18 71 22 248
              l5 217 -82 0 c-77 0 -83 -1 -83 -21 0 -19 -1 -19 -17 -4 -38 39 -96 44 -159
              16z m154 -117 c31 -21 32 -114 2 -144 -54 -54 -118 20 -90 104 17 54 49 68 88
              40z"/>
              <path className="st1" d="M4292 880 c-51 -48 -9 -130 66 -130 79 0 123 79 72 130 -28 28 -108
              28 -138 0z"/>
              <path className="st1" d="M5040 615 l0 -296 81 3 81 3 -1 118 c-2 132 10 171 52 165 35 -5 46
              -42 46 -167 l-1 -116 76 -3 76 -3 0 157 c0 125 -3 163 -17 191 -30 64 -125 81
              -192 34 -16 -12 -32 -21 -35 -21 -3 0 -6 52 -6 115 l0 115 -80 0 -80 0 0 -295z"/>

              <path className="st1" d="M5635 819 l-70 -20 3 -39 c4 -40 4 -40 -32 -40 l-36 0 0 -54 c0 -54
              0 -55 33 -58 l32 -3 5 -111 c4 -93 8 -116 25 -134 38 -43 106 -59 184 -44 31
              6 31 7 31 65 0 58 0 59 -25 53 -43 -11 -55 10 -55 97 l0 79 40 0 40 0 0 55 0
              55 -40 0 -40 0 0 60 c0 69 4 67 -95 39z"/> */}

             {/* <path className="st1" d="M331 1299 c-66 -11 -136 -50 -144 -80 -6 -21 -4 -21 46 -15 29 3 108 9 176 13 105 5 123 4 118 -8 -79 -180 -255 -643 -283 -744 -27 -98 -11 -149 52 -161 l31 -6 6 69 c9 107 164 632 242 819 l13 31 104 5 c84 4 114 9 154 29 l49 24 -155 17 c-169 18 -324 21 -409 7z"></path className="st1">
             <path className="st1" d="M710 888 c-14 -23 -19 -43 -15 -64 5 -31 -21 -108 -72 -208 -15 -30 -21 -52 -15 -58 5 -5 30 36 63 107 29 63 56 115 59 115 14 0 50 -43 56 -67 4 -16 -2 -55 -16 -102 -41 -135 -43 -147 -36 -174 7 -30 51 -57 91 -57 36 0 82 21 138 63 l47 37 0 -36 c0 -26 8 -43 29 -65 52 -51 116 -34 199 54 47 51 52 54 52 31 0 -59 37 -94 100 -94 36 0 124 54 156 96 l28 36 11 -46 c19 -74 72 -116 148 -116 46 0 144 51 192 100 l39 40 21 -42 c26 -55 62 -80 122 -85 78 -8 154 27 235 106 l67 66 6 -33 c7 -36 53 -72 93 -72 46 0 110 50 164 130 15 22 15 18 -2 -45 -39 -143 -39 -144 -120 -190 -40 -23 -90 -56 -111 -74 -42 -34 -66 -93 -55 -134 7 -30 55 -52 93 -42 47 11 116 94 169 202 47 95 52 102 107 134 68 39 126 98 157 159 21 42 18 72 -4 36 -43 -72 -79 -116 -122 -148 -27 -21 -54 -38 -60 -38 -7 0 3 47 27 120 21 66 41 143 45 170 6 48 6 50 -18 50 -34 0 -53 -24 -72 -92 -13 -46 -29 -71 -79 -123 -47 -49 -69 -65 -89 -65 -59 0 -60 78 -2 221 31 78 32 85 16 97 -9 7 -23 11 -31 10 -24 -5 -57 -62 -85 -146 -38 -111 -112 -199 -207 -242 -66 -29 -114 -26 -150 10 -26 25 -30 36 -27 72 l3 43 60 16 c152 41 254 135 255 234 0 36 -7 48 -37 64 -99 52 -291 -98 -349 -271 -22 -68 -54 -109 -112 -147 -87 -55 -177 -51 -202 10 -38 90 62 298 161 340 44 18 63 6 56 -37 -4 -20 -14 -45 -23 -55 -9 -10 -13 -23 -9 -28 12 -20 43 -11 65 17 17 21 21 36 17 71 -6 53 -23 71 -75 78 -89 12 -192 -71 -254 -206 -47 -100 -89 -155 -144 -187 -48 -28 -57 -29 -78 -8 -24 24 -19 57 21 138 31 63 35 77 24 90 -23 28 -38 18 -94 -62 -64 -89 -167 -192 -194 -192 -85 0 -30 207 90 338 90 97 177 95 177 -5 0 -25 4 -33 18 -33 26 0 42 20 42 52 0 58 -75 99 -154 84 -87 -16 -215 -136 -271 -252 -37 -78 -137 -160 -187 -152 -41 6 -44 30 -15 125 42 136 35 169 -47 237 -44 36 -45 38 -39 81 5 38 3 45 -11 45 -9 0 -25 -15 -36 -32z m1595 -79 c16 -25 -8 -82 -53 -128 -69 -68 -182 -130 -182 -99 1 22 53 116 92 161 51 61 126 95 143 66z m285 -533 c-38 -91 -109 -180 -138 -174 -44 9 -39 70 11 123 24 26 127 93 144 95 1 0 -6 -20 -17 -44z"></path className="st1"> */}
     </Anime>
   </svg>
   </div>
  );

  export default Svg;