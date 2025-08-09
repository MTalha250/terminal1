"use client";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

type AudienceType =
  | "customer_inquiry"
  | "general_question"
  | "other_inquiry"
  | "partnership"
  | "feedback";

type InquiryForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service: string;
  audience_type: AudienceType;
  message: string;
};

const Form = () => {
  const [loading, setLoading] = useState(false);
  const initialState: InquiryForm = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    audience_type: "customer_inquiry",
    message: "",
  };
  const [formData, setFormData] = useState<InquiryForm>({ ...initialState });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    if (Object.values(formData).some((value) => value === "")) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/inquiries/`,
        formData
      );
      toast.success("Inquiry submitted successfully");
      setFormData({ ...initialState });
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit inquiry");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="py-10 md:py-20 px-8 md:px-16 flex flex-col md:flex-row gap-10 max-w-screen-2xl mx-auto 2xl:px-0">
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4 max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide">
            Connecting You to Tomorrow's Energy Solutions{" "}
          </h1>
          <p className="text-lg sm:text-xl">
            We're here to assist you with your inquiries.
          </p>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="text-2xl shrink-0" />
              <p>info@terminaloneltd.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlinePhone className="text-2xl shrink-0" />
              <p>(230) 5457 6535</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineLocationOn className="text-2xl shrink-0" />
              <p>
                Madrassa Lane, Allee Brillant, Castel, Phoenix, Republic of
                Mauritius
              </p>
            </div>
          </div>
        </div>
      </div>
      <form
        className="w-full md:w-1/2 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName" className="font-semibold text-lg">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="border border-black rounded text-lg p-2 outline-none"
              value={formData.first_name}
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName" className="font-semibold text-lg">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border border-black rounded text-lg p-2 outline-none"
              value={formData.last_name}
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-black rounded text-lg p-2 outline-none"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="phone" className="font-semibold text-lg">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border border-black rounded text-lg p-2 outline-none"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="service" className="font-semibold text-lg">
            Choose a Service
          </label>
          <select
            id="service"
            name="service"
            className="border border-black rounded text-lg p-2 outline-none appearance-none"
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
          >
            <option value="" disabled>
              Select one...
            </option>
            <option value="Bunkering">Bunkering</option>
            <option value="Energy Storage">Energy Storage</option>
            <option value="Renewable Energy">Renewable Energy</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold text-lg">Which best describes you?</p>
          <div className="flex flex-col md:flex-row gap-4 justify-between max-w-lg">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="inquiry"
                  name="audience_type"
                  value="customer_inquiry"
                  checked={formData.audience_type === "customer_inquiry"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audience_type: e.target
                        .value as typeof formData.audience_type,
                    })
                  }
                />
                <label htmlFor="inquiry" className="text-lg">
                  Customer Inquiry
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="general"
                  name="audience_type"
                  value="general_question"
                  checked={formData.audience_type === "general_question"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audience_type: e.target
                        .value as typeof formData.audience_type,
                    })
                  }
                />
                <label htmlFor="general" className="text-lg">
                  General Question
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="other"
                  name="audience_type"
                  value="other_inquiry"
                  checked={formData.audience_type === "other_inquiry"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audience_type: e.target
                        .value as typeof formData.audience_type,
                    })
                  }
                />
                <label htmlFor="other" className="text-lg">
                  Other Inquiry
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="partnership"
                  name="audience_type"
                  value="partnership"
                  checked={formData.audience_type === "partnership"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audience_type: e.target
                        .value as typeof formData.audience_type,
                    })
                  }
                />
                <label htmlFor="partnership" className="text-lg">
                  Partnership Opportunity
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="feedback"
                  name="audience_type"
                  value="feedback"
                  checked={formData.audience_type === "feedback"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      audience_type: e.target
                        .value as typeof formData.audience_type,
                    })
                  }
                />
                <label htmlFor="feedback" className="text-lg">
                  Feedback Request
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="font-semibold text-lg">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            className="border border-black rounded text-lg p-3 outline-none"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="flex items-center gap-2 bg-secondary text-white px-4 py-3 w-fit rounded disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit"} <ArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Form;
