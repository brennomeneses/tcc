import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'
import Effort from './Effort'
export default class Criterion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public weight: number

  @column()
  public zero: string

  @column()
  public first: string

  @column()
  public second: string

  @column()
  public third: string

  @column({ columnName: 'isBenefit' })
  public isBenefit: boolean

  @column({ columnName: 'companyId' })
  public companyId: number

  @hasMany(() => Effort)
  public projects: HasMany<typeof Effort>

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
