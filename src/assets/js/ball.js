export default class Ball {
	constructor(radius) {
		base(this,LSprite,[]);
		let sprite = new LSprite();
		addChild(sprite);
		sprite.graphics.drawArc(0, '', [0, 0, radius, 0, 2 * Math.PI], true, "#ff0000");
	}
}
