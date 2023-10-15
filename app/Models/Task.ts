import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Project from './Project'
import User from './User'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column({ columnName: 'initalDate' })
  public initialDate: Date

  @column({ columnName: 'estimatedDate' })
  public estimatedDate?: Date

  @column({ columnName: 'finalDate' })
  public finalDate?: Date

  @column({ columnName: 'projectId' })
  public projectId: number

  @column({ columnName: 'userId' })
  public userId: number

  @belongsTo(() => Project)
  public project: BelongsTo<typeof Project>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
