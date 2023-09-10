import { DateTime } from 'luxon'
import {
  BaseModel,
  HasOne,
  ManyToMany,
  afterFetch,
  afterFind,
  column,
  hasOne,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import User from './User'

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

  @hasOne(() => User, { foreignKey: 'projectManagerId' })
  public projectManager: HasOne<typeof User>

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
