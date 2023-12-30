export type KeyId = 
/**units */
"cm" | "cm2" | "celsius" | "Hz" | "mol" | "kJ" | "mL"
/**utility */
 | "custom" | "right" | "left" | "rightarrow" | "del" | "close" | "switch" | "ou" | "et" | "maj"
/**geometry */
 | "overrightarrow" | "degree"
/**operations */
 | "plus" | "minus" | "times" | "frac" | "obelus" | "sqrt" | "sqrtCub" | "square" | "cube" | "power" | "percent" | "leftParenthesis" | "rightParenthesis" | "equal" | "comma" | "semicolon" | "dot" | "sup" | "inf" | "geq" | "leq" | "approx" | "xsquare" | "xcube"
/**sets */
 | "belongs" | "notin" | "cap" | "cup" | "lbrace" | "rbrace" | "lbracket" | "rbracket" | "emptyset" | "naturals" | "integers" | "rationals" | "decimals" | "reals" | "complex" | "ast" | "del" | "right" | "left" | "rightarrow" | "overrightarrow" | "infty"
/**fcts */
 | "log" | "ln" | "exp" | "epower" | "sin" | "cos" | "tan" | "arccos" | "arcsin" | "arctan" | "abs"
/**sequences */
 | "un" | "unplus1"
/**probas */
 | "overlineProba" | "majProba" | "minProba" | "binom"
/**complex */
 | "overline"
/**greek */
 | "alpha" | "beta" | "delta" | "Delta" | "sigma" | "theta" | "tau" | "pi" | "phi" | "Omega" | "lambda" | "mu" | "gamma" | "omega"
/**alphabet */
 | "guillemet" | "quote" | "hyphen" | "euro" | "space" | "underscore" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "É" | "È" | "Ç" | "À" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "é" | "è" | "à" | "ç" | "ù" | "ô"
/**numbers */
 | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
/**atoms */
 | "Hydrogène" | "Hélium" | "Lithium" | "Béryllium" | "Bore" | "Carbone" | "Azote" | "Oxygène" | "Fluor" | "Néon" | "Sodium" | "Magnésium" | "Aluminium" | "Silicium" | "Phosphore" | "Soufre" | "Chlore" | "Argon" | "Potassium" | "Calcium" | "Scandium" | "Titane" | "Vanadium" | "Chrome" | "Manganèse" | "Fer" | "Cobalt" | "Nickel" | "Cuivre" | "Zinc" | "Gallium" | "Germanium" | "Arsenic" | "Sélénium" | "Brome" | "Krypton" | "Rubidium" | "Strontium" | "Yttrium" | "Zirconium" | "Niobium" | "Molybdène" | "Technétium" | "Ruthénium" | "Rhodium" | "Palladium" | "Argent" | "Cadmium" | "Indium" | "Étain" | "Antimoine" | "Tellure" | "Iode" | "Xénon" | "Césium" | "Baryum" | "Lanthane" | "Cérium" | "Praséodyme" | "Néodyme" | "Prométhium" | "Samarium" | "Europium" | "Gadolinium" | "Térbium" | "Dysprosium" | "Holmium" | "Erbium" | "Thulium" | "Ytterbium" | "Lutétium" | "Hafnium" | "Tantale" | "Tungstène" | "Rhénium" | "Osmium" | "Iridium" | "Platine" | "Or" | "Mercure" | "Thallium" | "Plomb" | "Bismuth" | "Polonium" | "Astate" | "Radon" | "Francium" | "Radium" | "Actinium" | "Thorium" | "Protactinium" | "Uranium" | "Neptunium" | "Plutonium" | "Américium" | "Curium" | "Berkélium" | "Californium" | "Einsteinium" | "Fermium" | "Mendélévium" | "Nobelium" | "Lawrencium" | "Rutherfordium" | "Dubnium" | "Seaborgium" | "Bohrium" | "Hassium" | "Meitnérium" | "Darmstadtium" | "Roentgenium" | "Copernicium" | "Nihonium" | "Flerovium" | "Moscovium" | "Livermorium" | "Tennessine" | "Oganesson"
/**Molecules */
 | "Dihydrogène" | "Dioxygène" | "Eau" | "Méthane" | "Dioxyde de carbone" | "Ammoniac" | "Dioxyde de soufre" | "Éthanol" | "Glucose" | "Méthanol" | "Propane" | "Butane" | "Acide sulfurique" | "Propylène" | "Benzène" | "Acetonitrile" | "Méthanal" | "Méthanoate de sodium" | "Carbonate de calcium" | "Sulfate d'ammonium" | "Soude caustique" | "Nitrate d'ammonium" | "Carbonate de sodium" | "Vitamine C" | "Aspirine" | "Caféine" | "Paracétamol" | "Chlorure de sodium" | "Lactose" | "Acide acétique" | "Magnésium" | "Oxyde de magnésium" | "Fer" | "Oxyde de fer(III)" | "Éthane" | "Éthylène" | "Acétone" | "Toluène" | "Éthylène glycol" | "Butène" | "Pentène" | "Cyclohexane" | "Acétate d'éthyle" | "Acétate de méthyle" | "Acétate de butyle" | "Phénol" | "Éthanal" | "Butyraldéhyde" | "Furfural" | "Acide formique" | "Sucrose" | "Acide chlorhydrique" | "Hydroxyde de sodium" | "Nitrate d'argent" | "Chlorure d'argent" | "Nitrate de sodium" | "Hydroxyde de calcium" | "Sulfate de calcium" | "Sulfate de cuivre" | "Hydroxyde de cuivre(II)" | "Sulfate de sodium" | "Zinc" | "Chlorure de zinc" | "Hydroxyde de potassium" | "Sulfate de potassium" | "Peroxyde d'hydrogène" | "Chlorure de plomb(II)" | "Iodure de potassium" | "Iodure de plomb(II)" | "Chlorure de potassium" | "Acétate de sodium" | "Soufre" | "Nitrate de baryum" | "Sulfate de baryum" | "Cuivre" | "Nitrate de cuivre(II)" | "Argent" | "Phosphate de calcium" | "Soufre" | "Nitrate de potassium" | "Azote" | "Nitrate de plomb(II)" | "Sulfate de plomb(II)" | "Oxyde de calcium" | "Chlorure de cuivre(II)" | "Chlorure de fer(II)" | "Dichlore" | "Protoxyde d'azote" | "Peroxyde de dinitrogène" | "Dioxyde d'azote" | "Chlorate de potassium" | "Sulfate de zinc" | "Acide phosphorique" | "Oxyde de sodium" | "Monoxyde d'azote" | "Monoxyde de carbone" | "Oxyde de fer(III)" | "Sulfure de cuivre(I)" | "Oxyde de cuivre(I)" | "Ion hydronium" | "Ion sulfate" | "Ion fer(II)" | "Ion hydroxyde" | "Ion argent(I)" | "Ion phosphate" | "Phosphate d'argent(I)" | "Ion cuivre(II)" | "Acétate de sodium" | "Phosphate de calcium" | "Chlorure d'ammonium" | "cyclooctasoufre " | "Hydroxyde de magnésium" | "Chlorure de magnésium";
