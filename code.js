const vowels = "aeiou".split('')
const pairs = "th ph qu ck ps sh oo ea cl ss pr nt th fr yc mp mw nk hr rc xt ng lt rs tp tn bl mb tl ry ct st pl kn wn br sn ty nf yl dt tb dy tr ls gn gh ld ck gr nd mg wh td pn sr rg mm ns px sy cs jp nn cr sc py tt sh dd ys ll bj rn ht nl rd rm ww ch ml my rt gy pt rl fm sm ws gl sk wt ly lp ff ds ft fs np gg sp rv cn ms ph dl tw lb rf ts fl pp lw vy sl sw nb by xh rr dg nv xl df fy rk gm cc ps xc lm cy rp lf mf xp ny wl lk yp zz wr tc bs hy gs rb dn yn mn wc lv dr dv tm sv rh lr ln nh bd pm dm dw nj nw bk ks js nz dj rw nm bb hs gt bc lh dh wk xy kh mt nr bt sb tz sd bm jt cf dz rz lg jd cb xf pd tx hp zh pg dc jb xs mj rj kk hm vl hl kt kb dk zm vb db bg yd wf ky yk bn cg wm pc".split(' ')
const hard = "bcdfghjklmnprstvwxyz".split('')
const allChoices = [...vowels, ...hard, ...pairs]

const chooseNextType = (leterType) => {
    if (leterType === 'vowels') {
        return !Math.floor(Math.random() * 3) ? pairs : hard
    } else {
        return vowels
    }
}

const determineType = (x) => {
    if (x.length === 2) {
        return "pairs"
    } else if (vowels.includes(x)) {
        return "vowels"
    } else if (hard.includes(x)) {
        return "hard"
    }
}

const chooseALetter = (group) => {
    return group[Math.floor(Math.random() * group.length)]
}

const randomSize = () => {
    return Math.floor(Math.random() * 6) + 4
}

const buildAWord = () => {
    let word = ''
    while (word.length < randomSize() && word.length < 10) {
        if (word.length === 0) {
            word += chooseALetter([...vowels, ...hard])
        } else {
            const lastLetterInWord = word.match(/.$/)[0]
            const lastLetterType = determineType(lastLetterInWord)
            const nextLetterType = chooseNextType(lastLetterType)
            word += `${chooseALetter(nextLetterType)}`
        }
    }
    return word
}

document.querySelectorAll("button").forEach((e) => e.addEventListener("click", () => {
    document.querySelector("input").value = buildAWord()
}))
