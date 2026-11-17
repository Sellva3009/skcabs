"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { bookingFormMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

const tripTypes = ["One-way", "Round trip"] as const;

type FormState = {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  pickupTime: string;
  passengers: string;
  tripType: string;
  requirements: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  pickup: "",
  destination: "",
  travelDate: "",
  pickupTime: "",
  passengers: "4",
  tripType: "Round trip",
  requirements: "",
};

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[6-9]\d{9}$/.test(values.phone.trim())) {
    errors.phone = "Enter a 10-digit Indian mobile number.";
  }
  if (!values.pickup.trim()) errors.pickup = "Pickup location is required.";
  if (!values.destination.trim()) errors.destination = "Destination is required.";
  if (!values.travelDate) errors.travelDate = "Choose a travel date.";
  if (!values.pickupTime) errors.pickupTime = "Choose a pickup time.";
  const passengers = Number(values.passengers);
  if (!Number.isInteger(passengers) || passengers < 1 || passengers > 7) {
    errors.passengers = "Passengers must be between 1 and 7.";
  }
  if (!tripTypes.includes(values.tripType as (typeof tripTypes)[number])) {
    errors.tripType = "Select one-way or round trip.";
  }
  return errors;
}

export function BookingForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    trackEvent("booking_form_submit", {
      trip_type: values.tripType,
      passengers: Number(values.passengers),
    });

    const whatsappWindow = window.open(getWhatsAppUrl(bookingFormMessage(values)), "_blank", "noopener,noreferrer");
    if (!whatsappWindow) {
      setErrors({});
      window.location.href = getWhatsAppUrl(bookingFormMessage(values));
    }
  }

  const fieldClass =
    "mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm text-navy outline-none transition focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <Field label="Customer name" error={errors.name}>
        <input
          className={fieldClass}
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          required
        />
      </Field>
      <Field label="Phone number" error={errors.phone}>
        <input
          className={fieldClass}
          name="phone"
          inputMode="numeric"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          required
        />
      </Field>
      <Field label="Pickup location" error={errors.pickup}>
        <input
          className={fieldClass}
          name="pickup"
          value={values.pickup}
          onChange={(e) => setValues({ ...values, pickup: e.target.value })}
          required
        />
      </Field>
      <Field label="Destination" error={errors.destination}>
        <input
          className={fieldClass}
          name="destination"
          value={values.destination}
          onChange={(e) => setValues({ ...values, destination: e.target.value })}
          required
        />
      </Field>
      <Field label="Travel date" error={errors.travelDate}>
        <input
          className={fieldClass}
          type="date"
          name="travelDate"
          value={values.travelDate}
          onChange={(e) => setValues({ ...values, travelDate: e.target.value })}
          required
        />
      </Field>
      <Field label="Pickup time" error={errors.pickupTime}>
        <input
          className={fieldClass}
          type="time"
          name="pickupTime"
          value={values.pickupTime}
          onChange={(e) => setValues({ ...values, pickupTime: e.target.value })}
          required
        />
      </Field>
      <Field label="Number of passengers" error={errors.passengers}>
        <select
          className={fieldClass}
          name="passengers"
          value={values.passengers}
          onChange={(e) => setValues({ ...values, passengers: e.target.value })}
        >
          {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Trip type" error={errors.tripType}>
        <select
          className={fieldClass}
          name="tripType"
          value={values.tripType}
          onChange={(e) => setValues({ ...values, tripType: e.target.value })}
        >
          {tripTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="Additional requirements">
          <textarea
            className={`${fieldClass} min-h-24`}
            name="requirements"
            value={values.requirements}
            onChange={(e) => setValues({ ...values, requirements: e.target.value })}
            placeholder="Flight number, extra stops, child seat notes…"
          />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-whatsapp-bright px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5d] sm:w-auto"
        >
          Send enquiry on WhatsApp
        </button>
        <p className="mt-3 text-xs leading-5 text-muted">
          Submitting opens WhatsApp with your details filled in. No account or
          database stores this form.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-navy">
      {label}
      {children}
      {error ? <span className="mt-1 block text-xs font-normal text-red-700">{error}</span> : null}
    </label>
  );
}
