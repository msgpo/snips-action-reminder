import { logger, Handler } from 'snips-toolkit'

export const renameReminderHandler: Handler = async function(msg, flow) {
    logger.info('RenameReminder')
    flow.end()
}
