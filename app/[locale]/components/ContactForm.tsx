'use client'

import { useRef, useState } from "react"
import { submitContactForm } from "../submitContactForm"
import { Loader } from 'lucide-react'
import { useTranslations } from 'next-intl'

const inputClass = "w-full px-4 py-3 bg-white border border-sage/30 rounded-lg focus:ring-2 focus:ring-sage focus:border-sage outline-none transition-all text-ink"
const labelClass = "block text-sm font-medium text-ink mb-2 tracking-tight"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [travellingWithPets, setTravellingWithPets] = useState('No')
  const t = useTranslations('Contact')

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setStatus(null)

    const result = await submitContactForm(formData)

    if (result.error) {
      setStatus({ message: result.error, isError: true })
    } else {
      setStatus({ message: result.message || t('SuccessMessage'), isError: false })
      formRef.current?.reset()
      setTravellingWithPets('No')
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-10 lg:px-36 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-forest tracking-tight">
          {t('Title')}
        </h2>

        <div className="space-y-4 text-base text-ink/80 leading-relaxed tracking-tight mb-12">
          <p>{t('IntroPara')}</p>
          <p>{t('CheckInPara')}</p>
          <p>{t('DepositPara')}</p>
          <p>{t('ReplyPara')}</p>
        </div>

        {/* Rates */}
        <div className="bg-cream p-8 rounded-lg mb-12">
          <h3 className="text-xl font-semibold text-forest tracking-tight mb-6">
            {t('RatesTitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-base font-semibold text-forest tracking-tight mb-2">{t('RatesChambreLabel')}</h4>
              {(['Mid', 'Summer', 'Winter'] as const).map((season) => (
                <p key={season} className="text-sm text-ink/80 leading-relaxed tracking-tight mb-2">
                  <span className="font-semibold">{t(`RatesSeason${season}`)}</span><br />
                  {t(`RatesChambre${season}`)}
                </p>
              ))}
            </div>
            <div>
              <h4 className="text-base font-semibold text-forest tracking-tight mb-2">{t('RatesPontLabel')}</h4>
              {(['Mid', 'Summer', 'Winter'] as const).map((season) => (
                <p key={season} className="text-sm text-ink/80 leading-relaxed tracking-tight mb-2">
                  <span className="font-semibold">{t(`RatesSeason${season}`)}</span><br />
                  {t(`RatesPont${season}`)}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-1 pt-4 border-t border-sage/20">
            {/* Breakfast charge dropped (Clive, 27 Sept 2026) — whether breakfast is still offered at all is to be confirmed */}
            {/* <p className="text-sm text-ink/80 tracking-tight">{t('ExtrasBreakfast')}</p> */}
            <p className="text-sm text-ink/80 tracking-tight">{t('ExtrasPets')}</p>
            <p className="text-sm text-ink/80 tracking-tight">{t('ExtrasPickup')}</p>
          </div>
        </div>

        {/* Enquiry form */}
        <div className="bg-cream p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-forest tracking-tight mb-6">
            {t('FormTitle')}
          </h3>
          <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={labelClass}>{t('FirstName')} <span className="text-sage">{t('Required')}</span></label>
                <input type="text" id="firstName" name="firstName" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="surname" className={labelClass}>{t('Surname')} <span className="text-sage">{t('Required')}</span></label>
                <input type="text" id="surname" name="surname" required className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="addressLine1" className={labelClass}>{t('AddressLine1')}</label>
                <input type="text" id="addressLine1" name="addressLine1" className={inputClass} />
              </div>
              <div>
                <label htmlFor="addressLine2" className={labelClass}>{t('AddressLine2')}</label>
                <input type="text" id="addressLine2" name="addressLine2" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="postCode" className={labelClass}>{t('PostCode')}</label>
                <input type="text" id="postCode" name="postCode" className={inputClass} />
              </div>
              <div>
                <label htmlFor="city" className={labelClass}>{t('City')}</label>
                <input type="text" id="city" name="city" className={inputClass} />
              </div>
              <div>
                <label htmlFor="country" className={labelClass}>{t('Country')}</label>
                <input type="text" id="country" name="country" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClass}>{t('Email')} <span className="text-sage">{t('Required')}</span></label>
                <input type="email" id="email" name="email" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="mobile" className={labelClass}>{t('Mobile')}</label>
                <input type="tel" id="mobile" name="mobile" placeholder="+33" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="arrivalDate" className={labelClass}>{t('ArrivalDate')} <span className="text-sage">{t('Required')}</span></label>
                <input type="date" id="arrivalDate" name="arrivalDate" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="travellingFrom" className={labelClass}>{t('TravellingFrom')}</label>
                <input type="text" id="travellingFrom" name="travellingFrom" className={inputClass} />
              </div>
            </div>

            <div>
              <label htmlFor="preferredCheckIn" className={labelClass}>{t('PreferredCheckIn')}</label>
              <input type="time" id="preferredCheckIn" name="preferredCheckIn" min="16:00" max="19:00" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="departureDate" className={labelClass}>{t('DepartureDate')} <span className="text-sage">{t('Required')}</span></label>
                <input type="date" id="departureDate" name="departureDate" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="travellingTo" className={labelClass}>{t('TravellingTo')}</label>
                <input type="text" id="travellingTo" name="travellingTo" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="numberOfRooms" className={labelClass}>{t('NumberOfRooms')} <span className="text-sage">{t('Required')}</span></label>
                <select id="numberOfRooms" name="numberOfRooms" required className={inputClass}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div>
                <label htmlFor="numberOfGuests" className={labelClass}>{t('NumberOfGuests')} <span className="text-sage">{t('Required')}</span></label>
                <select id="numberOfGuests" name="numberOfGuests" required className={inputClass}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClass}>{t('TravellingWithPets')}</label>
              <div className="flex gap-6 mb-3">
                <label className="flex items-center gap-2 text-sm text-ink tracking-tight">
                  <input
                    type="radio"
                    name="travellingWithPets"
                    value="Yes"
                    checked={travellingWithPets === 'Yes'}
                    onChange={() => setTravellingWithPets('Yes')}
                  />
                  {t('Yes')}
                </label>
                <label className="flex items-center gap-2 text-sm text-ink tracking-tight">
                  <input
                    type="radio"
                    name="travellingWithPets"
                    value="No"
                    checked={travellingWithPets === 'No'}
                    onChange={() => setTravellingWithPets('No')}
                  />
                  {t('No')}
                </label>
              </div>
              {travellingWithPets === 'Yes' && (
                <input
                  type="text"
                  id="petsSpecify"
                  name="petsSpecify"
                  placeholder={t('PetsSpecify')}
                  className={inputClass}
                />
              )}
            </div>

            <div>
              <label htmlFor="furtherInfo" className={labelClass}>{t('FurtherInfo')}</label>
              <textarea
                id="furtherInfo"
                name="furtherInfo"
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-ink leading-relaxed tracking-tight">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  required
                  className="mt-1"
                />
                {t('TermsLabel')}
              </label>
            </div>

            {status && (
              <div
                className={`p-4 rounded-lg ${
                  status.isError ? 'bg-error-bg text-error-text' : 'bg-success-bg text-success-text'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  {t('Sending')}
                </>
              ) : (
                t('SendMessage')
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
