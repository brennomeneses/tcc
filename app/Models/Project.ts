import { DateTime } from 'luxon'
import {
  BaseModel,
  HasMany,
  HasOne,
  ManyToMany,
  column,
  hasMany,
  hasOne,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Effort from './Effort'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public stackeholder: string

  @column()
  public price: string

  @column()
  public deadline: Date

  @column({
    consume: (dice) => JSON.parse(dice),
  })
  public dice: string

  @column()
  public grade: string

  @column({ columnName: 'projectManagerId' })
  public projectManagerId: number

  @hasOne(() => User, { foreignKey: 'id', localKey: 'projectManagerId' })
  public projectManager: HasOne<typeof User>

  @hasMany(() => Effort)
  public effort: HasMany<typeof Effort>

  @manyToMany(() => User, {
    pivotTable: 'users_projects',
    pivotForeignKey: 'projectId',
    pivotRelatedForeignKey: 'userId',
  })
  public users: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
