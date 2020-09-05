import { computed, reactive, toRefs } from "vue";
import { Event } from "@/interfaces/Event";

function useEventSpace() {
    // This essentially encapsulates all of the above into a reactive object.
    // The main difference here is that the inner values are no longer passed
    // by reference since the entire object is a reference!
    const event: Event = reactive({
        capacity: 4,
        attending: ["Tim", "Bob", "Joe"],
        spacesLeft: computed(() => {
            return event.capacity - event.attending.length
        })
    })

    function increaseCapacity() {
        event.capacity++;
    }

    return { increaseCapacity, ...toRefs(event) };
}

export  { useEventSpace }
