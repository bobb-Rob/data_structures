function kangaroo(x1, v1, x2, v2) {
    if (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) {
      // what does the condition mean?
      // 
        return "YES";
    } else {
        return "NO";
    }
}