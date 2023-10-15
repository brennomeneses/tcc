import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Project from './Project'

export default class Reunion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public date: DateTime

  @manyToMany(() => User, {
    pivotTable: 'participants',
    pivotForeignKey: 'reunionId',
    pivotRelatedForeignKey: 'userId',
  })
  public participants: ManyToMany<typeof User>

  @manyToMany(() => Project, {
    pivotTable: 'reunion_projects',
    pivotForeignKey: 'reunionId',
    pivotRelatedForeignKey: 'projectId',
  })
  public projects: ManyToMany<typeof Project>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
