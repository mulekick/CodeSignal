/* ===================== FINAL VERSION ========================*/
'use strict'
befunge93 = p => new bf93exe(p).exec();
const cmdlist = /[<>v^#_|+*%/!`:\\$.," @0-9-]/;
class bf93dll {
	constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
		this.prog = p1, this.posx = p2, this.posy = p3, this.vctr = p4,
		this.stck = p5, this.outp = p6, this.cins = p7, this.inst = p8}
	cntexec() {return this.inst !== "@" && this.cins < 1e+4 && this.outp.length < 100}
	mvpntr() {
		let [y, x] = [this.posy, this.posx];
		y += this.vctr[0], x += this.vctr[1];
		this.posx = 
			x === this.prog[0].length ? 0 :
			x === -1 ? this.prog[0].length - 1 : x ;	
		this.posy = 
			y === this.prog.length ? 0 :
			y === -1 ? this.prog.length - 1 : y ;}
	pop() {return this.stck.length === 0 ? 0 : this.stck.shift()}
	push(v) {this.stck.unshift(v)}
	out(v) {this.outp += v}
	vctrs(v) {return { ">" : [0, 1], "<" : [0, -1], "v" : [1, 0], "^" : [-1, 0] }[v]}
	executecmd() {
		void {
			">" : () => this.vctr = this.vctrs(">"), 
			"<" : () => this.vctr = this.vctrs("<"), 
			"^" : () => this.vctr = this.vctrs("^"), 
			"v" : () => this.vctr = this.vctrs("v"), 
			"#" : () => this.mvpntr(), 
			"_" : () => this.vctr = this.vctrs(this.pop() === 0 ? ">" : "<"), 
			"|" : () => this.vctr = this.vctrs(this.pop() === 0 ? "v" : "^"), 
			"+" : () => this.push(Math.floor(((a, b) => a + b)(this.pop(), this.pop()))),
			"-" : () => this.push(Math.floor(((a, b) => b - a)(this.pop(), this.pop()))), 
			"*" : () => this.push(Math.floor(((a, b) => a * b)(this.pop(), this.pop()))),
			"/" : () => this.push(Math.floor(((a, b) => b / a)(this.pop(), this.pop()))), 
			"%" : () => this.push(Math.floor(((a, b) => b % a)(this.pop(), this.pop()))),
			"!" : () => this.push(this.pop() === 0 ? 1 : 0), 
			"`" : () => this.push(this.pop() < this.pop() ? 1 : 0),
			":" : () => this.push(!this.stck[0] ? 0 : this.stck[0]), 
			"\\" : () => {
				let a, b; 
				([a, b] = [this.pop(), this.pop()], this.push(a), this.push(b))		
			},
			"$" : () => this.pop(),
			"." : () => this.out(Math.floor(1 * this.pop()) + " "), 
			"," : () => this.out(String.fromCharCode(this.pop())),
			"\"" : () => {
				this.mvpntr(), 
				this.inst = this.prog[this.posy][this.posx];
				while(this.inst !== "\"") 							
					this.push(this.inst.charCodeAt()), 
					this.mvpntr(), 
					this.inst = this.prog[this.posy][this.posx]
			},
			"n" : () => this.push(1 * this.inst),
			"@" : () => {},
			" " : () => {}
		}[this.inst.match(cmdlist)[0].replace(/[0-9]/, "n")]()}	
}
class bf93exe extends bf93dll {
	constructor(p) {
		super(p, 0, 0, [], [], "", 0, ""), this.vctr = super.vctrs(">");
	}
	exec() {
		while(super.cntexec())
			this.inst = this.prog[this.posy][this.posx], super.executecmd(), 
			this.cins += 1, super.mvpntr();
		return this.outp;
	}
}
/* ===================== SECOND WORKING VERSION ========================
'use strict'
befunge93 = p => {
	var processor = new bf93exe(p);
	return processor.exec();
}
const cmds = {
	"d" : /[<>v^]/, "b" : /[#]/, "c" : /[_|]/, "m" : /[+]|[-]|[*]|[%]|[/]/,
	"l" : /[!`]/, "p" : /[:\\$]/, "o" : /[.,]/, "n" : /[0-9]/,
	"s" : /["]/, "w" : /[ ]/, "e" : /[@]/};
class bf93dll {
	constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
		this.prog = p1, this.posx = p2, this.posy = p3, this.vctr = p4,
		this.stck = p5, this.outp = p6, this.cins = p7, this.inst = p8}
	cntexec() {return this.inst !== "@" && this.cins < 1e+4 && this.outp.length < 100}
	mvpntr() {
		let [y, x] = [this.posy, this.posx];
		y += this.vctr[0], x += this.vctr[1];
		this.posx = 
			x === this.prog[0].length ? 0 :
			x === -1 ? this.prog[0].length - 1 : x ;	
		this.posy = 
			y === this.prog.length ? 0 :
			y === -1 ? this.prog.length - 1 : y ;}
	pop() {return this.stck.length === 0 ? 0 : this.stck.shift()}
	push(v) {this.stck.unshift(v)}
	out(v) {this.outp += v}
	vctrs(v) {return { ">" : [0, 1], "<" : [0, -1], "v" : [1, 0], "^" : [-1, 0] }[v]}
	cmdtyp(c) {
		for (let t in cmds) {
			let m = c.match(cmds[t]);
			if (m !== null) return t; 
		}
		return null}
	chdir() {this.vctr = this.vctrs(this.inst)}
	condition() {
		this.vctr = { 
			"_" : [this.vctrs(">"), this.vctrs("<")] , 
			"|" : [this.vctrs("v"), this.vctrs("^")] 
		}[this.inst][this.pop() === 0 ? 0 : 1]}
	math() {
		this.push(Math.floor({ 
			"+" : (a, b) => a + b, "-" : (a, b) => b - a, 
			"*" : (a, b) => a * b, "/" : (a, b) => b / a, 
			"%" : (a, b) => b % a 
		}[this.inst](this.pop(), this.pop())))}
	logic() {
		this.push({ 
			"!" : () => this.pop() === 0 ? 1 : 0, 
			"`" : () => this.pop() < this.pop() ? 1 : 0
		}[this.inst]())}
	stack() {
		let a, b;
		void { 
			":" : () => this.push(!this.stck[0] ? 0 : this.stck[0]), 
			"\\" : () => ([a, b] = [this.pop(), this.pop()], this.push(a), this.push(b)),
			"$" : () => this.pop()
		}[this.inst]()}
	output() {
		this.out({ 
			"." : (v) => Math.floor(1 * v) + " ", 
			"," : (v) => String.fromCharCode(v)
		}[this.inst](this.pop()))}
	extract() {		
		this.mvpntr(), this.inst = this.prog[this.posy][this.posx];
		while(this.inst !== "\"") 							
			this.push(this.inst.charCodeAt()), this.mvpntr(), this.inst = this.prog[this.posy][this.posx]}
}
class bf93exe extends bf93dll {
	constructor(program) {
		super(program, 0, 0, [], [], "", 0, "");
		this.vctr = super.vctrs(">");
	}
	exec() {
		while(super.cntexec()) {
			this.inst = this.prog[this.posy][this.posx];
			switch (super.cmdtyp(this.inst)) {
				case "d" : super.chdir(); break;
				case "b" : super.mvpntr(); break;
				case "c" : super.condition(); break;				
				case "m" : super.math(); break;
				case "l" : super.logic(); break;				
				case "p" : super.stack(); break;		
				case "o" : super.output(); break;
				case "n" : super.push(1 * this.inst); break;
				case "s" : super.extract(); break;
				default : break;
			}
			this.cins += 1;
			super.mvpntr();
		}
		return this.outp;
	}
}
*/
/* ===================== FIRST WORKING VERSION ========================
/*
'use strict'
befunge93 = p => {
	var processor = new bf93p(p);
	return processor.exec();
}
class bf93cst {
	constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
		this.prog = p1, this.posx = p2, this.posy = p3, this.vctr = p4,
		this.stck = p5, this.outp = p6, this.cins = p7, this.inst = p8;
	}
	cntexec() {
		return this.inst !== "@" && this.cins < 1e+4 && this.outp.length < 100;
	}
	mvpntr() {
		let [y, x] = [this.posy, this.posx];
		y += this.vctr[0], x += this.vctr[1];
		this.posx = 
			x === this.prog[0].length ? 0 :
			x === -1 ? this.prog[0].length - 1 : x ;	
		this.posy = 
			y === this.prog.length ? 0 :
			y === -1 ? this.prog.length - 1 : y ;
	}
	pop() {
		return this.stck.length === 0 ? 0 : this.stck.shift();
	}
	push(v) {
		this.stck.unshift(v);
	}
	out(v) {
		this.outp += v;
	}
	vctrs(v) {
		return { ">" : [0, 1], "<" : [0, -1], "v" : [1, 0], "^" : [-1, 0] }[v];
	}
	cmdtyp(c) {	
		let tps = {
				"d" : /[<>v^]/, "b" : /[#]/, "c" : /[_|]/, "m" : /[+]|[-]|[*]|[%]|[/]/,
				"l" : /[!`]/, "p" : /[:\\$]/, "o" : /[.,]/, "n" : /[0-9]/,
				"s" : /["]/, "w" : /[ ]/, "e" : /[@]/
			};
		for (let t in tps) {
			let m = c.match(tps[t]);
			if (m !== null) return t; 
		}
		return null;
	}
}
class bf93p extends bf93cst {
	constructor(program) {
		super(program, 0, 0, [], [], "", 0, "");
		this.vctr = super.vctrs(">");
	}
	exec() {
		var o, v, a, b;
		while(super.cntexec()) {
			this.inst = this.prog[this.posy][this.posx];
			o = v = a = b = (() => {})();
			switch (super.cmdtyp(this.inst)) {
				case "d" :
					this.vctr = super.vctrs(this.inst);
				break;
				case "b" :
					super.mvpntr();					
				break;
				case "c" :
					o = { 
						"_" : [super.vctrs(">"), super.vctrs("<")] , 
						"|" : [super.vctrs("v"), super.vctrs("^")] 
					};
					v = super.pop() === 0 ? 0 : 1;
					this.vctr = o[this.inst][v];
				break;				
				case "m" :
					a = super.pop(), b = super.pop();
					o = { 
						"+" : (a, b) => a + b, 
						"-" : (a, b) => b - a, 
						"*" : (a, b) => a * b, 
						"/" : (a, b) => b / a, 
						"%" : (a, b) => b % a 
					};
					//ROUND THE RESULT !!!
					super.push(Math.floor(o[this.inst](a, b)));
				break;
				case "l" :
					o = { 
						"!" : () => super.pop() === 0 ? 1 : 0, 
						"`" : () => super.pop() < super.pop() ? 1 : 0
					};
					super.push(o[this.inst]());
				break;				
				case "p" :
					o = { 
						":" : () => super.push(!this.stck[0] ? 0 : this.stck[0]), 
						"\\" : () => (a = super.pop(), b = super.pop(), super.push(a), super.push(b)),
						"$" : () => super.pop()
					};
					o[this.inst]();			
				break;				
				case "o" :
					v = super.pop();
					o = { 
						"." : (v) => Math.floor(1 * v) + " ", 
						"," : (v) => String.fromCharCode(v)
					};
					super.out(o[this.inst](v));
				break;
				case "n" :
					super.push(1 * this.inst);
				break;
				case "s" :				
					super.mvpntr();
					this.inst = this.prog[this.posy][this.posx];
					while(this.inst !== "\"") {								
						super.push(this.inst.charCodeAt());
						super.mvpntr();
						this.inst = this.prog[this.posy][this.posx];
					}
				break;	
				default :
				break;
			}
			this.cins += 1;
			super.mvpntr();
		}
		return this.outp;
	}
}
*/
/* ===================== PSEUDOCODE ========================
{
	direction : /[<>v^]/,
	bridge : /[#]/,
	conditional : /[_|]/,
	math : /[+]|[-]|[*]|[%]|[/]/,
	logical : /[!`]/,
	stack : /[:\\$]/,
	output : /[.,]/,
	digit : /[0-9]/,
	string : /["]/,
	blank : /[ ]/,
	end : /[@]/
}

//(continue execution) :
	//current command !== @
	//command count <= 105
	//processor output length <= 100

//=========== PROGRAM EXECUTION =========

	//While (continue execution) === true

		//Read current command
		
		//Switch current command type
					
			//direction
				//update current direction
			//bridge
				//(skip next cell)
				//move cursor to next position in current direction
			//conditional
				//pop v from stack
				//move cursor to position (left right, up down)
				//(no change in current direction)
			//math 
				//pop a from stack
				//pop b from stack
				//push a op b into stack
			//logical
				//update stack (pop v push !v, pop a pop b push (b > a)
			//stack
				//update stack(duplicate, swap, pop and discard)
			//output
				//pop v(num, ascii) from stack
				//push v(num, ascii) into output
			//digits 0-9
				//(push the encountered number on the stack)
				//push cmd into stack
			//": start string mode"
				//move cursor to next position in current direction
				//Read current command
					//While current command !== "
						//push cmd into stack
					//End while			
			//whitespace 
				//(empty instruction)
				//do nothing
			//end program
				//(the program output should be returned then)
				//do nothing
		
		//move cursor to next position in current direction
		
	//End while

	//return output
	
*/