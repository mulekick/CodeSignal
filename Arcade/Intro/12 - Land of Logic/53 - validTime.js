function validTime(time) {
	t = time.split(":");
	return (t.length == 2) && (parseInt(t[0]) < 24) && (parseInt(t[1]) < 60);
}
