import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Criterion from './Criterion'
import Project from './Project'

export default class Effort extends BaseModel {
  public static table = 'project_criteria'

  @column({ isPrimary: true })
  public id: number

  @column()
  public level: string

  @column({ columnName: 'projectId' })
  public projectId: number

  @column({ columnName: 'criterionId' })
  public criterionId: number

  @belongsTo(() => Criterion, {
    foreignKey: 'criterionId',
  })
  public criterion: BelongsTo<typeof Criterion>

  @belongsTo(() => Project, {
    foreignKey: 'projectId',
  })
  public project: BelongsTo<typeof Project>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
