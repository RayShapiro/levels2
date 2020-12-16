namespace SpriteKind {
    export const Object = SpriteKind.create()
}

game.onUpdate(function on_on_update() {
    if (man.isHittingTile(CollisionDirection.Right)) {
        man.startEffect(effects.fire, 500)
    }
    
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    scene.setBackgroundColor(8)
    sprite.startEffect(effects.fire, 500)
    // effects.dissolve.start_screen_effect(100,0)
    // effects.blizzard.start_screen_effect(200, 1000)
    // pause(1000)
    tiles.setTilemap(tilemap`level2`)
})
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level`)
let man = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(man)
scene.cameraFollowSprite(man)
