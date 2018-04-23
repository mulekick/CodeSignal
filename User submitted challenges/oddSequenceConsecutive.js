function oddSequenceConsecutive(p) {
	n = 0;
    l = p.length;
	for (i = 1; i < l; i++)
		if (p[i] % 2 != 0 && p[i - 1] % 2 != 0) n++;	
	return (n > 1) && (p[0] % 2 != 0) && (p[l - 1] % 2 != 0) && (l > 4 ? 1 : l % 2 == 1);
}
