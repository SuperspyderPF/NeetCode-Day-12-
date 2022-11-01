const twoSum = (n, t) =>
  n.reduce(
    (jz, jd, jzx, nu) =>
      jz.has(t - jd)
        ? nu.splice(0) && [jzx, jz.get(t - jd)]
        : jz.set(jd, jzx),
    new Map(),
);