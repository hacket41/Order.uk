import { Clock, Phone, Truck } from "lucide-react";

interface InformationCardProps {
  deliveryIcon?: string; // Path to your PNG icon
  contactIcon?: string; // Path to your PNG icon
  operationalIcon?: string; // Path to your PNG icon
  restaurantData?: {
    deliverySchedule: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
    estimatedDeliveryTime: string;
    contactInfo: {
      phoneNumber: string;
      website: string;
      allergyInfo: string;
    };
    operationalTimes: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
    };
  };
}

export default function InformationCard({
  deliveryIcon,
  contactIcon,
  restaurantData,
}: InformationCardProps) {
  const defaultData = {
    deliverySchedule: {
      monday: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM",
      tuesday: "8:00 AM–3:00 AM",
      wednesday: "8:00 AM–3:00 AM",
      thursday: "8:00 AM–3:00 AM",
      friday: "8:00 AM–3:00 AM",
      saturday: "8:00 AM–3:00 AM",
      sunday: "8:00 AM–12:00 AM",
    },
    estimatedDeliveryTime: "20 min",
    contactInfo: {
      phoneNumber: "+934443-43",
      website: "http://mcdonalds.uk/",
      allergyInfo:
        "If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.",
    },
    operationalTimes: {
      monday: "8:00 AM–3:00 AM",
      tuesday: "8:00 AM–3:00 AM",
      wednesday: "8:00 AM–3:00 AM",
      thursday: "8:00 AM–3:00 AM",
      friday: "8:00 AM–3:00 AM",
      saturday: "8:00 AM–3:00 AM",
      sunday: "8:00 AM–3:00 AM",
    },
  };

  const data = restaurantData || defaultData;

  const formatDay = (day: string) => {
    return day.charAt(0).toUpperCase() + day.slice(1) + ":";
  };

  return (
    <div className="container mx-auto mb-10 rounded-none bg-[#FBFBFB] shadow-[5px_5px_14px_0px_#00000040] lg:rounded-2xl">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Section - Delivery Information */}
        <div className="flex-1 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              {deliveryIcon ? (
                <img src={deliveryIcon} alt="Delivery" className="w-6 h-6" />
              ) : (
                <Truck size={24} className="text-gray-700" />
              )}
              <h2 className="text-xl font-bold text-gray-900">
                Delivery Information
              </h2>
            </div>

            <div className="space-y-3">
              {Object.entries(data.deliverySchedule).map(([day, time]) => (
                <div key={day} className="flex gap-6 flex-col sm:flex-row">
                  <span className="font-semibold text-gray-900 sm:w-24 mb-1 sm:mb-0">
                    {formatDay(day)}
                  </span>
                  <span className="text-gray-700 sm:ml-2">{time}</span>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row mt-6">
                <span className="font-semibold text-gray-900 sm:w-auto mb-1 sm:mb-0">
                  Estimated delivery time:
                </span>
                <span className="text-gray-700 sm:ml-2">
                  {data.estimatedDeliveryTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Contact Information */}
        <div className="flex-1 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              {contactIcon ? (
                <img src={contactIcon} alt="Contact" className="w-6 h-6" />
              ) : (
                <Phone size={24} className="text-gray-700" />
              )}
              <h2 className="text-xl font-bold text-gray-900">
                Contact Information
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                {data.contactInfo.allergyInfo}
              </p>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Phone number
                </h3>
                <p className="text-gray-700">{data.contactInfo.phoneNumber}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
                <a
                  href={data.contactInfo.website}
                  className="text-blue-600 hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.contactInfo.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Operational Times (Dark Theme) */}
        <div className="flex-1 p-6 lg:p-8 bg-gray-900 rounded-none lg:rounded-bl-none lg:rounded-r-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-white" />
              <h2 className="text-xl font-bold text-white">
                Operational Times
              </h2>
            </div>

            <div className="space-y-3">
              {Object.entries(data.operationalTimes).map(([day, time]) => (
                <div key={day} className="flex gap-6 flex-col sm:flex-row">
                  <span className="font-semibold text-white sm:w-24 mb-1 sm:mb-0">
                    {formatDay(day)}
                  </span>
                  <span className="text-gray-300 sm:ml-2">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
