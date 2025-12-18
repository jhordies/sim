/**
 * Constants for user input component
 */

/**
 * Mention menu options in order (matches visual render order)
 */
export const MENTION_OPTIONS = [
  'Chats',
  'Workflows',
  'Knowledge',
  'Blocks',
  'Workflow Blocks',
  'Templates',
  'Logs',
  'Docs',
] as const

/**
 * Model configuration options
 * Note: This is for Copilot only. Agent blocks use dynamic model loading from providers store.
 */
import { useProvidersStore } from '@/stores/providers/store'

export const getModelOptions = () => {
  const providersState = useProvidersStore.getState()
  const baseModels = providersState.providers.base.models
  const ollamaModels = providersState.providers.ollama.models
  const vllmModels = providersState.providers.vllm.models
  const openrouterModels = providersState.providers.openrouter.models
  
  const allModels = Array.from(
    new Set([...baseModels, ...ollamaModels, ...vllmModels, ...openrouterModels])
  )
  
  return allModels.map(model => ({ value: model, label: model }))
}

export const MODEL_OPTIONS = [
  { value: 'claude-4.5-opus', label: 'Claude 4.5 Opus' },
  { value: 'claude-4.5-sonnet', label: 'Claude 4.5 Sonnet' },
  { value: 'claude-4.5-haiku', label: 'Claude 4.5 Haiku' },
  { value: 'gpt-5.1-codex', label: 'GPT 5.1 Codex' },
  { value: 'gpt-5.1-medium', label: 'GPT 5.1 Medium' },
  { value: 'gemini-3-pro', label: 'Gemini 3 Pro' },
] as const

/**
 * Threshold for considering input "near top" of viewport (in pixels)
 */
export const NEAR_TOP_THRESHOLD = 300

/**
 * Scroll tolerance for mention menu positioning (in pixels)
 */
export const SCROLL_TOLERANCE = 8
