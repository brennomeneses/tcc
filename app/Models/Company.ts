import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Criterion from './Criterion'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column({ columnName: 'bannerImage' })
  public bannerImage: string

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @hasMany(() => Criterion)
  public criteria: HasMany<typeof Criterion>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
