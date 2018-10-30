function Currency() {
	this.quantity = 1;
	this.ratioWithProto = 1;
	this.sign = '$';
	this.sum = function (foreignCurr, nativeCurr) {
		var result = foreignCurr*this.ratioWithProto + nativeCurr;
		return result;
	}

	this.isCurrencyType = function() {
		return this.instanceOf(Currency);
	}
}

function Dollar() {
	this.ratioWithProto = 1;

	function getQuantity() {
		return this.quantity;
	}

	function Dollar() {
		Dollar.numInstances = (Dollar.numInstances || 0) + 1;
	}
}

Dollar.prototype.__proto__ = Currency.prototype;

function Canadian() {
	this.ratioWithProto = 1.2;
}

Canadian.prototype.__proto__ = Dollar.prototype;

function Hryvna() {
	this.ratioWithProto = 0.65;
}

Hryvna.prototype.__proto__ = Currency.prototype;