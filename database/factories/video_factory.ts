import factory from '@adonisjs/lucid/factories'
import Video from '#models/video'

export const VideoFactory = factory
  .define(Video, async ({ faker }) => {
    console.log('o que tem aqui!', faker)
    return {}
  })
  .build()
