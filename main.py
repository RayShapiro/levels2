@namespace
class SpriteKind:
    Object = SpriteKind.create()

def on_on_update():
    if man.is_hitting_tile(CollisionDirection.RIGHT):
        man.start_effect(effects.fire, 500)
    
game.on_update(on_on_update)

def on_overlap_tile(sprite, location):
    scene.set_background_color(8)
    sprite.start_effect(effects.fire, 500)
    #effects.dissolve.start_screen_effect(100,0)
    #effects.blizzard.start_screen_effect(200, 1000)
    #pause(1000)
    tiles.set_tilemap(tilemap("""level2"""))
scene.on_overlap_tile(SpriteKind.player, myTiles.tile1, on_overlap_tile)

scene.set_background_color(7)
tiles.set_tilemap(tilemap("""level"""))

man = sprites.create(img("""
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
"""),
    SpriteKind.player)

controller.move_sprite(man)
scene.camera_follow_sprite(man)
