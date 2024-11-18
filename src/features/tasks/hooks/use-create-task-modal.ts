import { useQueryState, parseAsBoolean, parseAsStringEnum } from 'nuqs'
import { TaskStatus } from '../types'

export const useCreateTaskModal = () => {
    const [isOpen, setIsOpen] = useQueryState(
        "create-task",
        parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
    )

    const [initialStatus, setInitialStatus] = useQueryState(
        "create-task-status",
        parseAsStringEnum(Object.values(TaskStatus)).withOptions({ clearOnDefault: true })
    )

    const open = (status?: TaskStatus) => {
        setIsOpen(true)
        if (status) {
            setInitialStatus(status)
        }
    }

    const close = () => {
        setIsOpen(false)
        setInitialStatus(null)
    }

    return {
        isOpen,
        initialStatus,
        open,
        close,
        setIsOpen,
        setInitialStatus
    }
}