function matek(arg) {
	if (arg == null) {		//ha nincs bemenet
		return 0;
	}  

	if (isNaN(arg)) {			// bemenet szöveg
		return 1;
	}

	if (isFinite(arg)) {		// egész szam
		if ((arg%2)==0) {		// ha a szam paros
			return Math.pow(arg, arg);
		}

		return Math.pow(arg-1, 2);

	}

}


//matek("asd");