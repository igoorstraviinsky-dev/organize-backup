export function normalizePhone(rawPhone) {
  return String(rawPhone || '').replace(/\D/g, '')
}

/**
 * Gera variantes de números brasileiros com/sem o nono dígito móvel.
 */
export function getBrPhoneVariants(rawPhone) {
  const digits = normalizePhone(rawPhone)
  const variants = new Set(digits ? [digits] : [])

  if (digits.startsWith('55')) {
    const local = digits.slice(4)

    if (digits.length === 13 && local.startsWith('9')) {
      variants.add(digits.slice(0, 4) + local.slice(1))
    }

    if (digits.length === 12 && /^[6-9]/.test(local)) {
      variants.add(digits.slice(0, 4) + '9' + local)
    }
  }

  return variants
}

export function brPhonesMatch(a, b) {
  const va = getBrPhoneVariants(a)
  const vb = getBrPhoneVariants(b)

  for (const candidate of va) {
    if (vb.has(candidate)) return true
  }

  return false
}

export function findProfileByPhone(profiles, phoneNumber) {
  const cleanPhone = normalizePhone(phoneNumber)
  if (cleanPhone.length < 8) return null

  return (profiles || []).find((profile) => (
    profile?.phone && brPhonesMatch(cleanPhone, profile.phone)
  )) || null
}

export async function fetchProfileByPhone(supabase, phoneNumber, columns = 'id, phone') {
  const cleanPhone = normalizePhone(phoneNumber)
  if (cleanPhone.length < 8) return null

  const { data: profiles, error } = await supabase
    .from('profiles')
    .select(columns)
    .not('phone', 'is', null)

  if (error || !profiles) return null

  return findProfileByPhone(profiles, cleanPhone)
}
