import factory from '@adonisjs/lucid/factories'
import Video from '#models/video'

export const VideoFactory = factory
  .define(Video, async ({ faker }) => {
    return {}
  })
  .build()